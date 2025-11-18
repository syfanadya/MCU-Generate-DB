<template>
    <v-layout v-if="xact !== 'new'" column >
        <v-dialog v-model="dialogconfirmationdeleteaddr" persistent  max-width="290">
            <v-card>
                <v-card-title
                    dark
                    class="headline error pt-2 pb-2"
                    primary-title
                    style="color:white"
                >
                    <h4 dark>Konfirmasi</h4>
                </v-card-title>
                <v-card-text>
                    {{msgconfirmationdeleteaddr}}
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn small v-if="!checkError('deleteutama')" color="error darken-1 text-sm-left" flat @click="doDeleteAddr()">Hapus</v-btn>
                    <v-btn small color="primary darken-1 text-sm-right" flat @click="dialogconfirmationdeleteaddr = false">Batal</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogformaddress" persistent  max-width="650">
            <v-card>
                <v-card-title>
                    <span class="headline">Form Alamat Pasien</span>
                </v-card-title>
                <v-card-text class="pt-0 pb-0">
                <v-layout wrap>
                    <v-flex xs12>
                        <v-text-field v-model="labeladdress" label="Label"></v-text-field>
                        <p v-if="checkError('requiredlabel')" class="error pl-2 pr-2" style="color:#fff">Jangan kosong dong</p>
                        <p v-if="checkError('readonlyutama')" class="error pl-2 pr-2" style="color:#fff">Biarkan jadi yang utama</p>
                    </v-flex>
                    <v-flex xs12>
                        <v-layout row>
                            <v-flex xs4 pa-1>
                                <v-autocomplete
                                    label="Kota"
                                    v-model="cityaddress"
                                    :items="xcities"
                                    :search-input.sync="search_city"
                                    auto-select-first
                                    no-filter
                                    item-text="M_CityName"
                                    return-object
                                    :loading="isLoading"
                                    no-data-text="Pilih Kota"
                                    >
                                    <template
                                        slot="item"
                                        slot-scope="{ item }"
                                        >
                                        <v-list-tile-content>
                                            <v-list-tile-title v-text="item.M_CityName"></v-list-tile-title>
                                        </v-list-tile-content>
                                    </template>
                                </v-autocomplete>
                                <p  v-if="checkError('requiredcity')" class="error pl-2 pr-2" style="color:#fff">Jangan kosong dong</p>
                            </v-flex>
                            <v-flex xs4 pa-1>
                                <v-select
                                    item-text="M_DistrictName"
                                    return-object
                                    :items="xdistricts" 
                                    v-model="districtaddress"
                                    label="Kecamatan*"
                                ></v-select>
                                <p  v-if="checkError('requireddistrict')" class="error pl-2 pr-2" style="color:#fff">Jangan kosong dong</p>
                            </v-flex>
                            <v-flex xs4 pa-1>
                                <v-select   
                                    item-text="M_KelurahanName"
                                    return-object
                                    :items="xkelurahans" 
                                    v-model="kelurahanaddress"
                                    label="Kelurahan / Desa*"
                                ></v-select>
                                <p  v-if="checkError('requiredkelurahan')" class="error pl-2 pr-2" style="color:#fff">Jangan kosong dong</p>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12>
                        <v-textarea
                            box
                            label="Alamat Lengkap"
                            v-model="descriptionaddress"
                        ></v-textarea>
                        <p  v-if="checkError('requireddescription')" class="error pl-2 pr-2" style="color:#fff">Jangan kosong dong</p>
                    </v-flex>
                    
                </v-layout>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialogformaddress = false">Tutup</v-btn>
                <v-btn v-if="xactaddr === 'new'" color="blue darken-1" flat @click="saveNewAddress()">Simpan</v-btn>
                <v-btn v-if="xactaddr === 'edit'" color="blue darken-1" flat @click="saveEditAddress()">Simpan</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card>
            <v-layout row>
                <v-flex xs12>
                    <v-subheader red--text text--lighten-1> ALAMAT PASIEN
                    <v-flex text-md-right>
                        <v-btn @click="createNewAddress()" small color="info">Baru</v-btn>
                    </v-flex>
                    </v-subheader>
                    <v-divider></v-divider>
                    <v-layout row wrap>
                        <v-flex xs12 pa-2>
                            <v-data-table 
                                :headers="headers" 
                                :items="xaddresses"
                                :loading="isLoading"
                                hide-actions class="elevation-1">
                                <template slot="items" slot-scope="props">
                                    <td class="text-xs-center pa-2">
                                        <v-icon color="error" @click="deleteAddress(props.item)">delete</v-icon>
                                        <v-icon class="ml-3" color="primary" @click="editAddress(props.item)">edit</v-icon>
                                    </td>
                                    <td class="text-xs-left pa-2">{{ props.item.M_PatientAddressNote}}</td>
                                    <td class="text-xs-left pa-2">{{ props.item.M_PatientAddressDescription}}</td>
                                </template>
                            </v-data-table>
                            
                        </v-flex>
                    </v-layout>
                </v-flex>    
            </v-layout>      
        </v-card>
    </v-layout>
</template>

<style scoped>

</style>

<script>
module.exports = {
    data: () => ({
            search_city:'',
            oldlabel:'',
            headers: [
            {
               text: "AKSI",
               align: "center",
               sortable: false,
               value: "action",
               width: "10%",
               class: "pa-1 blue lighten-3 white--text"
            },
            {
               text: "LABEL",
               align: "left",
               sortable: false,
               value: "mr",
               width: "20%",
               class: "pa-1 blue lighten-3 white--text"
            },
            {
               text: "ALAMAT",
               align: "left",
               sortable: false,
               value: "lab",
               width: "40%",
               class: "pa-1 blue lighten-3 white--text"
            }
         ]
    }),
    computed: {
        dialogconfirmationdeleteaddr:{
            get() {
                return this.$store.state.patient.dialog_confirmation_delete_addr
            },
            set(val) {
                this.$store.commit("patient/update_dialog_confirmation_delete_addr",val)
            }
        },
        msgconfirmationdeleteaddr(){
            return  this.$store.state.patient.msg_confirmation_delete_addr
        },
        xact() {
            return this.$store.state.patient.act
        },
        xactaddr() {
            return this.$store.state.patient.act_addr
        },
        dialogformaddress:{
            get() {
                return this.$store.state.patient.dialog_form_address
            },
            set(val) {
                this.$store.commit("patient/update_dialog_form_address",val)
            }
        },
        isLoading() {
            return this.$store.state.patient.search_status == 1
        },
        xaddresses(p) {
            return this.$store.state.patient.addresses
        },
        xcities(){
            return this.$store.state.patient.cities
        },
        labeladdress:{
            get() {
                return this.$store.state.patient.label_address
            },
            set(val) {
                this.$store.commit("patient/update_label_address",val)
            }
        },
        cityaddress:{
            get() {
                return this.$store.state.patient.city_address
            },
            set(val) {
                this.$store.commit("patient/update_city_address",val)
                this.$store.dispatch("patient/getdistrict",this.$store.state.patient.city_address)
            }
        },
        xdistricts(){
            return this.$store.state.patient.districts
        },
        districtaddress:{
            get() {
                return this.$store.state.patient.district_address
            },
            set(val) {
                this.$store.commit("patient/update_district_address",val)
                this.$store.dispatch("patient/getkelurahan",this.$store.state.patient.district_address)
            }
        },
        xkelurahans(){
            return this.$store.state.patient.kelurahans
        },
        kelurahanaddress:{
            get() {
                return this.$store.state.patient.kelurahan_address
            },
            set(val) {
                this.$store.commit("patient/update_kelurahan_address",val)
            }
        },
        descriptionaddress:{
            get() {
                return this.$store.state.patient.description_address
            },
            set(val) {
                this.$store.commit("patient/update_description_address",val)
            }
        },
    },
    methods : {
        createNewAddress(){
            this.$store.commit("patient/update_act_addr",'new')
            this.search_city = ''
            this.labeladdress = ''
            this.$store.commit("patient/update_cities",[])
            this.cityaddress = {}
            this.$store.commit("patient/update_districts",[])
            this.districtaddress = {}
            this.$store.commit("patient/update_kelurahans",[])
            this.kelurahanaddress = {}
            this.descriptionaddress = ''
            this.$store.commit("patient/update_dialog_form_address",true)
        },
        thr_search_city: _.debounce( function () {
            this.$store.dispatch("patient/searchcity",this.search_city)
        },2000),
        checkError(value){
            var errors = this.$store.state.patient.errors
            if(errors.includes(value)){
                return true
            }
            else{
                return false
            }
        },
        saveNewAddress(){
            this.$store.commit("patient/update_errors",[])
            var errors = this.$store.state.patient.errors
            if(this.labeladdress === ''){
                errors.push("requiredlabel")
            }
            if(_.isEmpty(this.cityaddress)){
                errors.push("requiredcity")
            }
            if(_.isEmpty(this.districtaddress)){
                errors.push("requireddistrict")
            }
            if(_.isEmpty(this.kelurahanaddress)){
                errors.push("requiredkelurahan")
            }
            if(_.isEmpty(this.descriptionaddress)){
                errors.push("requireddescription")
            }

            if(errors.length === 0){
                var prm = {}
                prm.M_PatientAddressM_PatientID = this.$store.state.patient.selected_patient.M_PatientID
                prm.M_PatientName = this.$store.state.patient.selected_patient.M_PatientName
                prm.M_PatientAddressNote = this.labeladdress
                prm.M_PatientAddressDescription =  this.descriptionaddress
                prm.M_PatientAddressM_KelurahanID = this.kelurahanaddress.M_KelurahanID
                this.$store.dispatch("patient/savenewaddress",prm)
            }
        },
        editAddress(value){
            this.$store.commit("patient/update_act_addr",'edit')
            this.$store.commit("patient/update_x_addr_id",value.M_PatientAddressID)
            this.labeladdress = value.M_PatientAddressNote
            this.oldlabel = value.M_PatientAddressNote
            this.$store.commit("patient/update_cities",[{M_CityID:value.M_CityID,M_CityName:value.M_CityName}])
            this.cityaddress = {M_CityID:value.M_CityID,M_CityName:value.M_CityName}
            this.$store.commit("patient/update_districts",[{M_DistrictID:value.M_DistrictID,M_DistrictName:value.M_DistrictName}])
            this.districtaddress = {M_DistrictID:value.M_DistrictID,M_DistrictName:value.M_DistrictName}
            this.$store.commit("patient/update_kelurahans",[{M_KelurahanID:value.M_PatientAddressM_KelurahanID,M_KelurahanName:value.M_KelurahanName}])
            this.kelurahanaddress = {M_KelurahanID:value.M_PatientAddressM_KelurahanID,M_KelurahanName:value.M_KelurahanName}
            this.descriptionaddress = value.M_PatientAddressDescription
            this.$store.commit("patient/update_dialog_form_address",true)
        },
        saveEditAddress(){
            this.$store.commit("patient/update_errors",[])
            var errors = this.$store.state.patient.errors
            if(this.labeladdress === ''){
                errors.push("requiredlabel")
            }
            if(this.oldlabel.toLowerCase() === 'utama' && this.labeladdress.toLowerCase() !== 'utama'){
                errors.push("readonlyutama")
            }
            if(_.isEmpty(this.cityaddress)){
                errors.push("requiredcity")
            }
            if(_.isEmpty(this.districtaddress)){
                errors.push("requireddistrict")
            }
            if(_.isEmpty(this.kelurahanaddress)){
                errors.push("requiredkelurahan")
            }
            if(_.isEmpty(this.descriptionaddress)){
                errors.push("requireddescription")
            }

            if(errors.length === 0){
                var prm = {}
                prm.M_PatientAddressID = this.$store.state.patient.x_addr_id
                prm.M_PatientAddressM_PatientID = this.$store.state.patient.selected_patient.M_PatientID
                prm.M_PatientName = this.$store.state.patient.selected_patient.M_PatientName
                prm.M_PatientAddressNote = this.labeladdress
                prm.M_PatientAddressDescription =  this.descriptionaddress
                prm.M_PatientAddressM_KelurahanID = this.kelurahanaddress.M_KelurahanID
                this.$store.dispatch("patient/saveeditaddress",prm)
            }
        },
        deleteAddress(value){
            this.$store.commit("patient/update_act_addr",'delete')
            this.$store.commit("patient/update_x_addr_id",value.M_PatientAddressID)
            this.$store.commit("patient/update_errors",[])
            this.oldlabel = value.M_PatientAddressNote
            var errors = this.$store.state.patient.errors
            if(value.M_PatientAddressNote.toLowerCase() === 'utama'){
                errors.push("deleteutama")
            }
            var msg = ''
            if(errors.includes("deleteutama")){
                msg = "Biarkan yang utama tetap ada"
            }
            else{
                msg = "Yakin, akan menghapus data alamat pasien "+value.M_PatientAddressNote+" ?"
            }
            
            this.$store.commit("patient/update_msg_confirmation_delete_addr",msg)
            this.$store.commit("patient/update_dialog_confirmation_delete_addr",true)
        },
        doDeleteAddr(){
            var prm = {}
            prm.M_PatientAddressID = this.$store.state.patient.x_addr_id
            prm.M_PatientAddressM_PatientID = this.$store.state.patient.selected_patient.M_PatientID
            prm.M_PatientName = this.$store.state.patient.selected_patient.M_PatientName
            prm.M_PatientAddressNote = this.oldlabel
            this.$store.dispatch("patient/deleteaddress",prm)
        }
    },
    watch: {
        search_city(val,old) {
            if (val == old ) return
            if (! val) return
            if (val.length < 1 ) return
            if (this.$store.state.patient.update_autocomplete_status == 1 ) return  
            this.thr_search_city()
        }
   }
}
</script>
