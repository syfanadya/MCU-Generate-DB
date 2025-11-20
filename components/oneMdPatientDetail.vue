<template>
    <v-layout class="mb-2" column>
        <v-dialog v-model="dialog_confirm_create_db" persistent max-width="400">
            <v-card>
                <v-card-title class="headline warning" primary-title>
                    Konfirmasi Generate Ulang
                </v-card-title>
                <v-card-text>
                    Anda yakin ingin meng-generate ulang database untuk company <br>
                    <strong>{{ selected_mgmmcu.mcuName }}</strong>? <br><br>
                    <span class="red--text">Semua data sebelumnya akan hilang.</span>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="grey" flat @click="dialog_confirm_create_db = false">Batal</v-btn>
                    <v-btn color="warning" @click="confirmCreateDatabase">YA, LANJUTKAN</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-card v-if="selected_mgm_mcu_id && (isLoading || kelainanCount.length > 0)">
            <v-card-title style="background:#57c492; color:white">
                <span>Daftar Kelainan</span>
                <v-spacer></v-spacer>
                <v-btn small color="primary" @click="saveSelection" :loading="loading_save">Simpan Pilihan</v-btn>
            </v-card-title>

            <v-card-text>
                <v-data-table
                    v-model="selectedKelainan"
                    :headers="kelainanHeaders"
                    :items="kelainanCount"
                    item-key="Mcu_KelainanID"
                    select-all
                    class="elevation-1"
                    :pagination.sync="pagination" 
                >
                    <template v-slot:headers="props">
                        <tr>
                            <th class="text-xs-left" style="width:10%">
                                Pilih
                            </th>
                            <th v-for="header in props.headers" :key="header.text" class="text-xs-left">
                                {{ header.text }}
                            </th>
                        </tr>
                    </template>

                    <template v-slot:items="props">
                        <td>
                            <v-checkbox
                                v-model="props.selected"
                                primary
                                hide-details
                            ></v-checkbox>
                        </td>
                        <td class="text-xs-left">{{ props.item.Mcu_KelainanName }}</td>
                        <td class="text-xs-left">{{ props.item.total_patient }}</td>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <v-card class="mt-4 pa-3" v-else-if="selected_mgm_mcu_id && !isLoading && kelainanCount.length === 0">
            <v-layout row wrap align-center justify-center text-xs-center>
                <v-flex xs12>
                    <h3 class="headline font-weight-light mb-2">Data Kelainan Belum Ada</h3>
                    <span class="font-weight-light">Tidak ada data kelainan yang ditemukan untuk MCU ini. Silakan buat database terlebih dahulu.</span>
                </v-flex>
                <v-flex xs12 mt-3>
                    <v-btn large color="success" @click="createDatabase" :loading="loading_create_db">
                        <v-icon left>mdi-database-plus</v-icon>
                        Create Database
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card>

        <v-card class="mt-4 pa-3" v-if="showGenerateDbButton" color="black--text">
            <v-layout row wrap align-center justify-center text-xs-center>
                <v-flex xs12>
                    <span class="font-weight-light">Pilihan kelainan telah disimpan. Anda sekarang siap untuk men-generate database.</span>
                </v-flex>
                <v-flex xs12 mt-3>
                    <v-btn x-large color="primary" @click="generateDatabase" :loading="loading_generate">
                        <v-icon left>mdi-database-arrow-down</v-icon>
                        Download Database
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card>

    </v-layout>
</template>

<style scoped>


    table,
    td,
    th {
        border: 0px solid #ddd;
        text-align: left;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 8px;
        padding-right: 5px;
    }

    .mini-input .v-input {
        margin-top: 0px;
    }

    .mini-input .v-input,
    .mini-input .v-input--selection-controls,
    .mini-input .v-input__slot {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 3px;
    }

    .mini-input .v-messages {
        min-height: 0px;
    }

    input.fhm-input {
        border: 1px solid black;
        border-radius: 2px;
        -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1),
        0 0 4px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1),
        0 0 4px rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1),
        0 0 4px rgba(0, 0, 0, 0.1);
        padding: 2px 4px;
        background: rgba(255, 255, 255, 0.5);
        margin: 0 0 1px 0;
        width: 30px;
        text-align: center;
    }
</style>

<script>
  module.exports = {
    data () {
        return {
        showGenerateDbButton: false,
        createDb: false,
        selectedKelainan: [],
        pagination: {
            rowsPerPage: 5
        },
        kelainanHeaders: [
            { text: 'Nama Kelainan', value: 'Mcu_KelainanName', sortable: false },
            { text: 'Total Pasien', value: 'total_patient', sortable: false },
        ]
      }
      },
    
    mounted() { 
        // Logika dipindahkan ke oneMdPatientList.vue untuk dipicu saat MCU dipilih
    },
    computed: {
        kelainanCount() {
            return this.$store.state.patient.kelainan_count
        },
        loading_save() {
            return this.$store.state.patient.loading_save
        },
        loading_generate() {
            return this.$store.state.patient.loading_generate
        },
        loading_create_db() {
            return this.$store.state.patient.loading_create_db;
        },
        selected_mgm_mcu_id() {
            return this.$store.state.patient.selected_mgm_mcu_id
        },
        isLoading() {
            return this.$store.state.patient.get_data_status === 1;
        },
        selected_mgmmcu() {
            return this.$store.state.patient.selected_mgmmcu;
        },
        dialog_confirm_create_db: {
            get() { return this.$store.state.patient.dialog_confirm_create_db; },
            set(val) { this.$store.commit("patient/update_dialog_confirm_create_db", val); }
        },
        pages () {
            if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) 
                return 0

            return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
        }
    },
    
    methods: {
        async saveSelection() {
            const totalAvailable = this.kelainanCount.length;
            const totalSelected = this.selectedKelainan.length;

            if (totalAvailable >= 10) {
                if (totalSelected !== 10) {
                    alert("Harap pilih tepat 10 kelainan.");
                    return;
                }
            } else if (totalSelected !== totalAvailable) {
                alert(`Harap pilih ${totalAvailable} kelainan yang tersedia.`);
                return;
            }

            const payload = {
                mgm_mcu_id: this.selected_mgm_mcu_id,
                selected_kelainan: this.selectedKelainan.map(item => ({
                    id: parseInt(item.Mcu_KelainanID),
                    name: item.Mcu_KelainanName
                }))
            };

            const success = await this.$store.dispatch("patient/savekelainanselection", payload);

            if (success) {
                this.showGenerateDbButton = true;
            }
        },
        generateDatabase() {
            this.$store.dispatch("patient/generateDatabase");
        },
        createDatabase() {
            this.dialog_confirm_create_db = true;
        },
        async confirmCreateDatabase() {
            this.dialog_confirm_create_db = false;
            const truncateSuccess = await this.$store.dispatch("patient/truncateDatabaseAction", {
                mgm_mcu_id: this.selected_mgm_mcu_id,
                confirm_truncate: true
            });

            if (truncateSuccess) {
                this.$store.dispatch("patient/createDatabase", {
                    mgm_mcu_id: this.selected_mgm_mcu_id
                });
            }
        }
    },

  }
</script>