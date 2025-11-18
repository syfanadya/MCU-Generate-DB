<template>
    <v-layout class="fill-height" column>
        <v-dialog
        v-model="dialog_identifier"
        width="800"
        >
            <v-card>
                <v-card-title
                    class="headline grey lighten-2 pt-2 pb-2"
                    primary-title
                >
                GAGAL, KTP DAN TANGGAL LAHIR HARUS BENAR!!!
                </v-card-title>
                <v-card-text>
                    <v-layout align-center row>
                        <v-flex xs12 pl-2 pr-2 pt-2 pb-2>
                            <v-data-table :headers="headers" :items="xidentifer" hide-actions
                            class="elevation-1">
                                <template slot="items" slot-scope="props">
                                    <td class="text-xs-left pa-2" v-html="props.item.NAMA"></td>
                                    <td class="text-xs-left pa-2" v-html="props.item.KTP"></td>
                                </template>
                            </v-data-table>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        flat
                        @click="dialog_identifier = false"
                    >
                        Tutup
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogsuccess" persistent max-width="290">
            <v-card>
                <v-card-title color="success" class="headline">Berhasil !</v-card-title>
                <v-card-text>
                    {{msgsuccess}}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat @click="closeDialogSuccess">OK</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card color="orange accent-1" class="mb-2 pa-2 searchbox">
            <v-layout row>
                <v-flex xs12>
                    <v-card>
                        <v-layout pa-2 row>
                            <v-flex xs12>
                                <v-autocomplete :items="xmgmmcu" v-model="selected_mgmmcu" item-text="mcuName" outline
                                    item-value="Mgm_McuID" return-object label="MCU">
                                </v-autocomplete>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout row>
                            <v-flex xs12 pa-2>
                                <v-card color="orange" dark>
                                    <v-card-text>
                                        <v-layout align-center row>
                                            <v-flex pb-2 xs12>
                                                SETUP : {{selected_mgmmcu.Mgm_McuLabel}}
                                            </v-flex>
                                        </v-layout>
                                        <v-divider dark></v-divider>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <p class="mb-0 caption"> Periode : {{selected_mgmmcu.Mgm_McuStartDate}} - {{selected_mgmmcu.Mgm_McuEndDate}}</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
        
        <one-dialog-alert :status="openalertconfirmation" :msg="msgalertconfirmation" @forget-dialog-alert="forgetAlertConfirmation()" @close-dialog-alert="closeAlertConfirmation()"></one-dialog-alert>
        <one-dialog-info :status="opendialoginfo" :msg="msginfo" @close-dialog-info="opendialoginfo = false"></one-dialog-info>
    </v-layout>
</template>

<style scoped>
  table.v-table tbody td,table.v-table tbody th {
      height: 35px;
   }

   table.v-table thead tr {
      height: 35px;
   }
</style>
<script>
    module.exports = {
        components: {
            'one-dialog-info' : httpVueLoader('../../common/oneDialogInfo.vue'),
            'one-dialog-alert': httpVueLoader('../../common/oneDialogAlert.vue')
        },
        mounted() {
            //this.setNewSetup()
            this.$store.dispatch("patient/getmgmmcu")
            
        },
        methods: {
            downloadxapp(){
                var start = Date.now()
                location.replace("/install-mcu.zip?tm="+start)
            },
            generateSetup(){
                this.$store.commit("patient/update_patients", [])
                this.$store.commit("patient/update_total_patients", 0)
                this.$store.dispatch("patient/generatesetup", {
                    setupcode : this.setupcode
                })
            },
            editRow(row){
                console.log(row)
                this.$store.commit("patient/update_act", 'edit')
                this.$store.commit("patient/update_xid", row.McuOfflinePrepareID)
                this.$store.commit("patient/update_companies", [{id:row.McuOfflinePrepareM_CompanyID,name:row.M_CompanyName}])
                this.$store.commit("patient/update_company", {id:row.McuOfflinePrepareM_CompanyID,name:row.M_CompanyName})
                this.$store.commit("patient/update_mous", row.allmous)
                this.$store.commit("patient/update_mou", {})
                this.$store.commit("patient/update_selected_mous", row.mous)
                this.$store.commit("patient/update_selected_doctors", row.doctors)
                
                this.$store.commit("patient/update_start_date", moment(row.McuOfflinePrepareStartDate).format('YYYY-MM-DD'))
                this.$store.commit("patient/update_end_date", moment(row.McuOfflinePrepareEndDate).format('YYYY-MM-DD'))
            },
            isSelected(p) {
                return p.M_PatientID == this.$store.state.patient.selected_patient.M_PatientID
            },
            searchPatient() {
                this.$store.dispatch("patient/search", {
                    status: this.status,
                    current_page: 1,
                    lastid: -1
                })
                this.$store.commit("patient/update_current_page", 1)
            },
            selectMe(pat) {
                if (this.$store.state.patient.no_save == 0) {
                    this.$store.commit("patient/update_selected_patient", pat)
                } else {
                    this.$store.commit("patient/update_open_alert_confirmation", true)
                }
            },
            closeAlertConfirmation() {
                this.$store.commit("patient/update_open_alert_confirmation", false)
            },
            forgetAlertConfirmation() {
                this.$store.commit("patient/update_no_save", 0)
                this.$store.commit("patient/update_open_alert_confirmation", false)
            },
            updateAlert_success(val) {
                this.$store.commit("patient/update_alert_success", val)
            },
            closeDialogSuccess() {
                let arrpatient = this.$store.state.patient.patients
                var idx = _.findIndex(arrpatient, item => item.M_PatientID === this.$store.state.patient.last_id)
                console.log(idx)
                this.$store.dispatch("patient/search", {
                    status: this.status,
                    current_page: this.curr_page,
                    lastid: idx
                })
                this.$store.commit("patient/update_dialog_success", false)
            },
            setNewSetup(){
                this.$store.commit("patient/update_act", 'new')
                this.$store.commit("patient/update_xid", -1)
                this.$store.commit("patient/update_company", {})
                this.$store.commit("patient/update_mous", [])
                this.$store.commit("patient/update_mou", {})
                this.$store.commit("patient/update_default_mou", {})
                this.$store.commit("patient/update_default_doctor", {})
                this.$store.commit("patient/update_selected_mous", [])
                this.$store.commit("patient/update_selected_doctors", [])
                this.$store.commit("patient/update_start_date", moment(new Date()).format('YYYY-MM-DD'))
                this.$store.commit("patient/update_end_date", moment(new Date()).format('YYYY-MM-DD'))
            },
            deleteData(row) {
                this.$store.commit("patient/update_selected_patient", row)
                console.log(this.$store.state.patient.selected_patient)
                let msg = "Yakin, akan menghapus data setup " + this.$store.state.patient.selected_patient.McuOfflinePrepareCode + " ?"
                this.$store.commit("patient/update_msg_confirmation_delete", msg)
                this.$store.commit("patient/update_dialog_confirmation_delete", true)
            },
            doDeleteData() {
                var prm = {}
                prm.id   = this.$store.state.patient.selected_patient.McuOfflinePrepareID
                prm.code = this.$store.state.patient.selected_patient.McuOfflinePrepareCode
                console.log(prm)
                this.$store.dispatch("patient/delete", prm)
            }
        },
        computed: {
            opendialoginfo: {
                get() {
                    return this.$store.state.patient.open_dialog_info
                },
                set(val) {
                    this.$store.commit("patient/update_open_dialog_info",false)
                }
            },
            msginfo: {
                get() {
                    return this.$store.state.patient.msg_info
                },
                set(val) {
                    this.$store.commit("patient/update_msg_info",false)
                }
            },
            xidentifer() {
                return this.$store.state.patient.error_identifier
            },
            xmgmmcu() {
                return this.$store.state.patient.mgmmcu
            },
            selected_mgmmcu: {
                get() {
                    return this.$store.state.patient.selected_mgmmcu
                },
                set(val) {
                    this.$store.commit("patient/update_selected_mgmmcu", val)
                    this.$store.commit("patient/update_selected_mgm_mcu_id", val ? val.Mgm_McuID : null)

                    // Pastikan 'val' adalah objek yang valid dan memiliki ID
                    if (val && val.Mgm_McuID) {
                        this.$store.dispatch("patient/getcountkelainan", {
                            Mgm_McuID: val.Mgm_McuID,
                            company_id: val.Mgm_McuCorporateID 
                        });
                    }
                }
            },
            setupcode: {
                get() {
                    return this.$store.state.patient.setupcode
                },
                set(val) {
                    this.$store.commit("patient/update_setupcode", val)
                }
            },
            xsetup() {
                return this.$store.state.patient.data_setup
            },
            dialogconfirmationdelete: {
                get() {
                    return this.$store.state.patient.dialog_confirmation_delete
                },
                set(val) {
                    this.$store.commit("patient/update_dialog_confirmation_delete", val)
                }
            },
            msgconfirmationdelete() {
                return this.$store.state.patient.msg_confirmation_delete
            },
            status: {
                get() {
                    return this.$store.state.patient.status
                },
                set(val) {
                    this.$store.commit("patient/update_status", val)
                    this.$store.dispatch("patient/search", {
                        status: val,
                        current_page: this.curr_page,
                        lastid: -1
                    })
                }
            },
            dialogsuccess: {
                get() {
                    return this.$store.state.patient.dialog_success
                },
                set(val) {
                    this.$store.commit("patient/update_dialog_success", val)
                }
            },
            msgsuccess() {
                return this.$store.state.patient.msg_success
            },
            snackbar: {
                get() {
                    return this.$store.state.patient.alert_success
                },
                set(val) {
                    this.$store.commit("patient/update_alert_success", val)
                }
            },
            isLoading() {
                return this.$store.state.patient.search_status == 1
            },
            openalertconfirmation: {
                get() {
                    return this.$store.state.patient.open_alert_confirmation
                },
                set(val) {
                    this.$store.commit("patient/update_open_alert_confirmation", val)
                }
            },
            loading_save: {
                get() {
                    return this.$store.state.patient.loading_save
                },
                set(val) {
                    this.$store.commit("patient/update_loading_save", val)
                },
            },

        },
        filters: {
            capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
            }
        },
        data() {
            return {
                files: [], 
                dialog_identifier: false,
                channel_name: '',
                channel_fields: [],
                channel_entries: [],
                parse_header: [],
                parse_csv: [],
                sortOrders:{},
                sortKey: '',
                statuses:[{id:"N",name:"Belum di download"},{id:"Y",name:"Sudah di download"}],
                msgalertconfirmation: "Perubahan yang telah dilakukan belum disimpan dong !",
                items: [],
                name: '',
                snorm: '',
                page: 1,
                headers: [
                    {
                        text: "NAMA",
                        align: "left",
                        sortable: false,
                        value: "mr",
                        width: "50%",
                        class: "pa-2 deep-orange accent-1 white--text"
                    },
                    {
                        text: "KTP",
                        align: "left",
                        sortable: false,
                        value: "lab",
                        width: "50%",
                        class: "pa-2 deep-orange accent-1 white--text"
                    }
                ],
                pagination: {
                    descending: false,
                    page: 1,
                    rowsPerPage: 5,
                    sortBy: 'M_PatientName',
                    totalItems: this.$store.state.patient.total_patients
                }
            };
        },

    }
</script>