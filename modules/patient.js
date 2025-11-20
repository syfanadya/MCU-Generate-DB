// 1 => LOADING
// 2 => DONE
// 3 => ERROR
import * as api from "../api/patient.js"

export default {
    namespaced: true,
    state: {
        lookup_status: 0,
        mgmmcu: [],
        selected_mgmmcu: {},
        error_identifier: [],
        // cpone
        last_id: -1,
        last_saved_id: -1,
        x_addr_id: 0,
        act: 'edit',
        act_addr: 'new',
        get_data_status: 0,
        search_patient: 0,
        search_status: 0,
        search_error_message: '',
        norm: '',
        patient_prefix: '',
        patient_name: '',
        patient_suffix: '',
        titles: [],
        selected_title: {},
        dob: '',
        patients: [],
        total_patients: 0,
        patient_address: [],
        sexes: [],
        selected_sex: {},
        religions: [],
        selected_religion: {},
        phone: '',
        hp: '',
        email: '',
        pob: '',
        kartuidentitass: [],
        selected_kartuidentitas: {},
        noidentitas: '',
        note: '',
        nik: '',
        jabatan: '',
        kedudukan: '',
        pj: '',
        location: '',
        job: '',
        total_patient: 0,
        selected_patient: {},
        save_status: 0,
        btn_save_seen: true,
        pgrs_save: false,
        save_error_message: '',
        no_save: 0,
        open_alert_confirmation: false,
        alert_success: false,
        msg_success: "",
        dialog_success: false,
        dialog_confirmation_delete: false,
        msg_confirmation_delete: "",
        dialog_confirmation_delete_addr: false,
        msg_confirmation_delete_addr: "",
        autocomplete_status: 0,
        dialog_form_address: false,
        label_address: '',
        addresses: [],
        cities: [],
        city_address: {},
        companies:[],
        company:{},
        mous:[],
        mou:{},
        doctors:[],
        doctor:{},
        districts: [],
        district_address: {},
        kelurahans: [],
        kelurahan_address: {},
        description_address: '',
        errors: [],
        current_page:1,
        autocomplete_status:0,
        status:{id:"N",name:"Belum di download"},
        start_date:moment(new Date()).format('YYYY-MM-DD'),
        end_date:moment(new Date()).format('YYYY-MM-DD'),
        selected_mous:[],
        selected_doctors:[],
        xid:-1,
        csv_json:[],
        data_setup:{},
        default_mu :{},
        default_doctor:{},
        setupcode:'',
        search:'',
        loading_save:false,
        open_dialog_info: false,
        msg_info: '',
        loading_generate: false,
        kelainan_count: [],
        loading_create_db: false,
        create_db_progress: 0,
        create_db_message: '',
        selected_mgm_mcu_id: 0,
        dialog_confirm_create_db: false,
    },
    mutations: {
        update_open_dialog_info(state, val) {
            state.open_dialog_info = val
        },
        update_msg_info(state, val) {
            state.msg_info = val
        },
        update_lookup_status(state, val) {
            state.lookup_status = val
        },
        update_mgmmcu(state, val) {
            state.mgmmcu = val
        },
        update_selected_mgmmcu(state, val) {
            state.selected_mgmmcu = val
        },
        update_error_identifier(state, val) {
            state.error_identifier = val
        },
        // cpone
        update_search(state,val){
            state.search = val
        },
        update_setupcode(state,val){
            state.setupcode = val
        },
        update_default_mu(state,val){
            state.default_mu = val
        },
        update_default_doctor(state,val){
            state.default_doctor = val
        },
        update_data_setup(state,val){
            state.data_setup = val
        },
        update_csv_json(state,val){
            state.csv_json = val
        },
        update_xid(state,val){
            state.xid = val
        },
        update_selected_doctors(state,val){
            state.selected_doctors = val
        },
        update_selected_mous(state,val){
            state.selected_mous = val
        },
        update_companies(state,val){
            state.companies = val
        },
        update_company(state,val){
            state.company = val
        },
        update_mous(state,val){
            state.mous = val
        },
        update_mou(state,val){
            state.mou = val
        },
        update_doctors(state,val){
            state.doctors = val
        },
        update_doctor(state,val){
            state.doctor = val
        },
        update_autocomplete_status(state,val){
            state.autocomplete_status = val
        },
        update_start_date(state, val) {
            state.start_date = val
        },
        update_end_date(state, val) {
            state.end_date = val
        },
        update_status(state, val) {
            state.status = val
        },
        update_current_page(state, val) {
            state.current_page = val
        },
        update_x_addr_id(state, val) {
            state.x_addr_id = val
        },
        update_last_id(state, val) {
            state.last_id = val
        },
        update_last_saved_id(state, val) {
            state.last_saved_id = val
        },
        update_act(state, val) {
            state.act = val
        },
        update_act_addr(state, val) {
            state.act_addr = val
        },
        update_get_data_status(state, val) {
            state.get_data_status = val
        },
        update_search_error_message(state, patient) {
            state.search_error_message = patient
        },
        update_search_patient(state, patient) {
            state.search_patient = patient
        },
        update_dob(state, val) {
            state.dob = val
        },
        update_patient_prefix(state, val) {
            state.patient_prefix= val
        },
        update_patient_name(state, val) {
            state.patient_name = val
        },
        update_patient_suffix(state, val) {
            state.patient_suffix = val
        },
        update_norm(state, val) {
            state.norm = val
        },
        update_titles(state, val) {
            state.titles = val
        },
        update_selected_title(state, val) {
            state.selected_title = val
        },
        update_patients(state, data) {
            state.patients = data
        },
        update_selected_patient(state, val) {
            state.selected_patient = val
        },
        update_sexes(state, val) {
            state.sexes = val
        },
        update_selected_sex(state, val) {
            state.selected_sex = val
        },
        update_religions(state, val) {
            state.religions = val
        },
        update_selected_religion(state, val) {
            state.selected_religion = val
        },
        update_phone(state, val) {
            state.phone = val
        },
        update_email(state, val) {
            state.email = val
        },
        update_pob(state, val) {
            state.pob = val
        },
        update_hp(state, val) {
            state.hp = val
        },
        update_kartuidentitass(state, val) {
            state.kartuidentitass = val
        },
        update_selected_kartuidentitas(state, val) {
            state.selected_kartuidentitas = val
        },
        update_noidentitas(state, val) {
            state.noidentitas = val
        },
        update_note(state, val) {
            state.note = val
        },
        update_nik(state, val) {
            state.nik = val
        },
        update_jabatan(state, val) {
            state.jabatan = val
        },
        update_kedudukan(state, val) {
            state.kedudukan = val
        },
        update_pj(state, val) {
            state.pj = val
        },
        update_location(state, val) {
            state.location = val
        },
        update_job(state, val) {
            state.job = val
        },
        update_save_status(state, val) {
            state.save_status = val
        },
        update_btn_save_seen(state, val) {
            state.btn_save_seen = val
        },
        update_pgrs_save(state, val) {
            state.pgrs_save = val
        },
        update_save_error_message(state, msg) {
            state.save_error_message = ''
        },
        update_no_save(state, val) {
            state.no_save = val
        },
        update_open_alert_confirmation(state, val) {
            state.open_alert_confirmation = val
        },
        update_alert_success(state, val) {
            state.alert_success = val
        },
        update_msg_success(state, val) {
            state.msg_success = val
        },
        update_dialog_success(state, val) {
            state.dialog_success = val
        },
        update_dialog_confirmation_delete(state, val) {
            state.dialog_confirmation_delete = val
        },
        update_msg_confirmation_delete(state, val) {
            state.msg_confirmation_delete = val
        },
        update_dialog_confirmation_delete_addr(state, val) {
            state.dialog_confirmation_delete_addr = val
        },
        update_msg_confirmation_delete_addr(state, val) {
            state.msg_confirmation_delete_addr = val
        },
        update_addresses(state, val) {
            state.addresses = val
        },
        update_autocomplete_status(state, val) {
            state.autocomplete_status = val
        },
        update_dialog_form_address(state, val) {
            state.dialog_form_address = val
        },
        update_label_address(state, val) {
            state.label_address = val
        },
        update_cities(state, val) {
            state.cities = val
        },
        update_city_address(state, val) {
            state.city_address = val
        },
        update_districts(state, val) {
            state.districts = val
        },
        update_district_address(state, val) {
            state.district_address = val
        },
        update_kelurahans(state, val) {
            state.kelurahans = val
        },
        update_kelurahan_address(state, val) {
            state.kelurahan_address = val
        },
        update_description_address(state, val) {
            state.description_address = val
        },
        update_search_status(state, val) {
            state.search_status = val
        },
        update_errors(state, val) {
            state.errors = val
        },
        update_total_patients(state, val) {
            state.total_patients = val
        },
        update_total_patient(state, val) {
            state.total_patient = val
        },
        update_save_status(state, val) {
            state.save_status = val
        },
        update_loading_save(state, val) {
            state.loading_save = val
        },
        update_loading_generate(state, val) {
            state.loading_generate = val
        },
        update_kelainan_count(state, data) {
            state.kelainan_count = data
        },
        update_selected_mgm_mcu_id(state, val) {
            state.selected_mgm_mcu_id = val
        },
        update_loading_create_db(state, val) {
            state.loading_create_db = val;
        },
        update_create_db_progress(state, val) {
            state.create_db_progress = val;
        },
        update_create_db_message(state, val) {
            state.create_db_message = val;
        },
        update_dialog_confirm_create_db(state, val) {
            state.dialog_confirm_create_db = val;
        }
    },
    actions: {
        async getmgmmcu(context) {
            context.commit("update_lookup_status", 1)
            try {
                var prm = {token: one_token()}
                let resp = await api.getmgmmcu(prm)
                if (resp.status != "OK") {
                    context.commit("update_lookup_status", 3)
                } else {
                    context.commit("update_lookup_status", 2)
                    let data = {
                        records: resp.data.records,
                    }
                    context.commit("update_mgmmcu", resp.data.records)
                }
            } catch (e) {
                context.commit("update_lookup_status", 3)
            }
        },

        async generatesetup(context, prm) {
            context.commit("update_get_data_status", 1)
            try {
                prm.token = one_token()
                let resp = await api.generatesetup(prm)
                if (resp.status != "OK") {
                    context.commit("update_get_data_status", 3)
                } else {
                    context.commit("update_get_data_status", 2)

                    let setupData = resp.data.records;
                    console.log("DEBUG DATA SETUP:", setupData);

                    context.commit("update_data_setup", setupData)
                    context.commit("update_setupcode", '')
                    context.commit("update_current_page", 1)

                    if (context.state.selected_mgmmcu && context.state.selected_mgmmcu.Mgm_McuID) {
                        context.dispatch("getcountkelainan", {
                            Mgm_McuID: context.state.selected_mgmmcu.Mgm_McuID
                        });
                    }

                    context.dispatch("search", {
                        search: '',
                        xid: setupData.McuOfflinePrepareID,
                        current_page: 1,
                        lastid: -1
                    })
                }
            } catch (e) {
                context.commit("update_get_data_status", 3)
            }
        },
        
        async getsexreg(context) {
            context.commit("update_get_data_status", 1)
            try {
                let resp = await api.getsexreg(one_token())
                if (resp.status != "OK") {
                    context.commit("update_get_data_status", 3)
                } else {
                    context.commit("update_get_data_status", 2)
                    let data = {
                        records: resp.data.records,
                        total: resp.data.total
                    }
                    context.commit("update_sexes", data.records.sexes)
                    context.commit("update_religions", data.records.religions)
                    context.commit("update_titles", data.records.titles)
                    context.commit("update_kartuidentitass", data.records.kartuidentitass)
                }
            } catch (e) {
                context.commit("update_get_data_status", 3)
            }
        },

        async savecsv(context, prm) {
            context.commit("update_save_status", 1)
            try {
                context.commit("update_loading_save", true)
                prm.token = one_token()
                let resp = await api.savecsv(prm)
                if (resp.status != "OK") {
                    context.commit("update_loading_save", false)
                    context.commit("update_save_status", 3)
                    context.commit("update_open_dialog_info", true)
                    context.commit("update_msg_info", resp.message)
                } else {
                    context.commit("update_loading_save", false)
                    context.commit("update_save_status", 2)
                    
                    context.dispatch("search", {
                        search: '',
                        current_page: 1,
                        lastid: -1
                    })
                    

                    if (context.state.selected_mgmmcu && context.state.selected_mgmmcu.Mgm_McuID) {
                        context.dispatch("getcountkelainan", {
                            mgm_mcu_id: context.state.selected_mgmmcu.Mgm_McuID
                        })
                    }
                }
            } catch (e) {
                context.commit("update_loading_save", false)
                context.commit("update_save_status", 3)
            }
        },
        
        async gotoreg(context, prm) {
            context.commit("update_save_status", 1)
            try {
                prm.token = one_token()
                let resp = await api.gotoreg(prm)
                if (resp.status != "OK") {
                    context.commit("update_save_status", 3)
                } else {
                    context.commit("update_save_status", 2)
                    var pre_id = prm.Mcu_PreregisterDetailsID
                    location.replace("/one-ui/test/vuex/one-fo-registration-v8/" + "?pre_id=" +pre_id)
                }
            } catch (e) {
                context.commit("update_save_status", 3)
            }
        },
        async newpatient(context, prm) {
            context.commit("update_save_status", 1)
            try {
                prm.token = one_token()
                let resp = await api.newpatient(prm)
                if (resp.status != "OK") {
                    context.commit("update_save_status", 3)
                } else {
                    context.commit("update_save_status", 2)
                    console.log(resp.data.id)
                    context.commit("update_last_id", resp.data.id)
                    context.commit("update_dialog_success", true)
                    var msg = "Data pasien " + prm.M_PatientName + " sudah tersimpan dong ..."
                    context.commit("update_msg_success", msg)

                }
            } catch (e) {
                context.commit("update_save_status", 3)
            }
        },
        async delete(context, prm) {
            context.commit("update_save_status", 1)
            try {
                prm.token = one_token()
                let resp = await api.xdelete(prm)
                if (resp.status != "OK") {
                    context.commit("update_save_status", 3)
                } else {
                    context.commit("update_save_status", 2)
                    context.commit("update_last_id", 0)
                    context.commit("update_dialog_confirmation_delete", false)
                    context.commit("update_dialog_success", true)
                    var msg = "Data setup " + prm.code + " sudah dihapus dong ..."
                    context.commit("update_msg_success", msg)
                    context.commit("update_company", {})
                    context.commit("update_selected_mous", [])
                    context.commit("update_mou", {})
                    context.commit("update_selected_doctors", [])
                    context.commit("update_start_date", moment(new Date()).format('YYYY-MM-DD'))
                    context.commit("update_end_date", moment(new Date()).format('YYYY-MM-DD'))
                    context.commit("update_default_mou", {})
                    context.commit("update_default_doctor", {})
                    }
            } catch (e) {
                context.commit("update_save_status", 3)
            }
        },
        async getaddress(context, prm) {
            context.commit("update_save_status", 1)
            try {
                prm.token = one_token()
                let resp = await api.getaddress(prm)
                if (resp.status != "OK") {
                    context.commit("update_save_status", 3)
                } else {
                    context.commit("update_save_status", 2)
                    let data = {
                        records: resp.data.records,
                        total: resp.data.total
                    }
                    context.commit("update_addresses", data.records)
                }
            } catch (e) {
                context.commit("update_save_status", 3)
            }
        },
        async savesetup(context, prm) {
            context.commit("update_save_status", 1)
            try {
                prm.token = one_token()
                let resp = await api.savesetup(prm)
                if (resp.status != "OK") {
                    context.commit("update_save_status", 3)
                } else {
                    context.commit("update_save_status", 2)
                    let data = {
                        records: resp.data.records,
                        total: resp.data.total
                    }
                    context.commit("update_company", {})
                    context.commit("update_selected_mous", [])
                    context.commit("update_mou", {})
                    context.commit("update_selected_doctors", [])
                    context.commit("update_start_date", moment(new Date()).format('YYYY-MM-DD'))
                    context.commit("update_end_date", moment(new Date()).format('YYYY-MM-DD'))
                    context.commit("update_default_mou", {})
                    context.commit("update_default_doctor", {})
                    context.commit("update_dialog_success", true)
                    if(context.state.act === 'new')
                        var msg = "Pembuatan setup nomor " + resp.data.records.xnumber + " sudah berhasil dong ..."
                    else
                        var msg = "Perubahan setup nomor " + resp.data.records.xnumber + " sudah berhasil dong ..."

                    context.commit("update_msg_success", msg)
                }
            } catch (e) {
                context.commit("update_save_status", 3)
            }
        },
        async searchcity(context, prm) {
            context.commit("update_autocomplete_status", 1)
            try {
                let resp = await api.searchcity(one_token(), prm)
                if (resp.status != "OK") {
                    context.commit("update_autocomplete_status", 3)
                } else {
                    context.commit("update_autocomplete_status", 2)
                    let data = {
                        records: resp.data.records,
                        total: resp.data.total
                    }
                    context.commit("update_cities", resp.data.records)
                }
            } catch (e) {
                context.commit("update_autocomplete_status", 3)
            }
        },
        async searchdoctor(context,prm) {
            context.commit("update_autocomplete_status",1)
            try {
                var xpar = {}
                xpar.search = prm
                xpar.token = one_token()
                let resp= await api.searchdoctor(xpar)
                if (resp.status != "OK") {
                    context.commit("update_autocomplete_status",3)
                } else {
                    context.commit("update_autocomplete_status",2)
                    let data = {
                        records : resp.data.records,
                        total: resp.data.total
                    }
                    var arr = resp.data.records
                    var xsel = context.state.selected_doctors
                    var filtered = arr.filter(o1 => xsel.filter(o2 => o2.id === o1.id).length === 0)
                    context.commit("update_doctors",filtered)
                }
            } catch(e) {
            context.commit("update_autocomplete_status",3)
            }
        },
        async searchcompany(context,prm) {
            context.commit("update_autocomplete_status",1)
            try {
                prm.token = one_token()
                
                let resp= await api.searchcompany(prm)
                if (resp.status != "OK") {
                    context.commit("update_autocomplete_status",3)
                } else {
                    context.commit("update_autocomplete_status",2)
                    let data = {
                        records : resp.data.records,
                        total: resp.data.total
                    }
                    context.commit("update_companies",resp.data.records)
                }
            } catch(e) {
            context.commit("update_autocomplete_status",3)
            }
        },
        async getdistrict(context, prm) {
            context.commit("update_get_data_status", 1)
            try {
                let resp = await api.getdistrict(one_token(), prm)
                if (resp.status != "OK") {
                    context.commit("update_get_data_status", 3)
                } else {
                    context.commit("update_get_data_status", 2)
                    let data = {
                        records: resp.data.records,
                        total: resp.data.total
                    }
                    context.commit("update_districts", resp.data.records)
                }
            } catch (e) {
                context.commit("update_get_data_status", 3)
            }
        },
        async getkelurahan(context, prm) {
            context.commit("update_get_data_status", 1)
            try {
                let resp = await api.getkelurahan(one_token(), prm)
                if (resp.status != "OK") {
                    context.commit("update_get_data_status", 3)
                } else {
                    context.commit("update_get_data_status", 2)
                    let data = {
                        records: resp.data.records,
                        total: resp.data.total
                    }
                    context.commit("update_kelurahans", resp.data.records)
                }
            } catch (e) {
                context.commit("update_get_data_status", 3)
            }
        },
        async savenewaddress(context, prm) {
            context.commit("update_save_status", 1)
            try {
                prm.token = one_token()
                let resp = await api.savenewaddress(prm)
                if (resp.status != "OK") {
                    context.commit("update_save_status", 3)
                } else {
                    context.commit("update_save_status", 2)
                    context.commit("update_dialog_form_address", false)
                    context.commit("update_last_id", prm.M_PatientAddressM_PatientID)
                    context.commit("update_dialog_success", true)
                    var msg = "Penambahan data alamat pasien " + prm.M_PatientName + " sudah berhasil dong ..."
                    context.commit("update_msg_success", msg)

                }
            } catch (e) {
                context.commit("update_save_status", 3)
            }
        },
        async saveeditaddress(context, prm) {
            context.commit("update_save_status", 1)
            try {
                prm.token = one_token()
                let resp = await api.saveeditaddress(prm)
                if (resp.status != "OK") {
                    context.commit("update_save_status", 3)
                } else {
                    context.commit("update_save_status", 2)
                    context.commit("update_dialog_form_address", false)
                    context.commit("update_last_id", prm.M_PatientAddressM_PatientID)
                    context.commit("update_dialog_success", true)
                    var msg = "Perubahan data alamat pasien " + prm.M_PatientName + " sudah berhasil dong ..."
                    context.commit("update_msg_success", msg)

                }
            } catch (e) {
                context.commit("update_save_status", 3)
            }
        },
        async deleteaddress(context, prm) {
            context.commit("update_save_status", 1)
            try {
                prm.token = one_token()
                let resp = await api.deleteaddress(prm)
                if (resp.status != "OK") {
                    context.commit("update_save_status", 3)
                } else {
                    context.commit("update_save_status", 2)
                    context.commit("update_dialog_confirmation_delete_addr", false)
                    context.commit("update_last_id", prm.M_PatientAddressM_PatientID)
                    context.commit("update_dialog_success", true)
                    var msg = "Penghapusan data alamat " + prm.M_PatientAddressNote + " dari pasien " + prm.M_PatientName + " sudah berhasil dong ..."
                    context.commit("update_msg_success", msg)

                }
            } catch (e) {
                context.commit("update_save_status", 3)
            }
        },
        async getmou(context,prm) {
            context.commit("update_lookup_order",1)
            try {
                prm.token = one_token()
                let resp= await api.getmou(prm)
                if (resp.status != "OK") {
                    context.commit("update_lookup_order",3)
                } else {
                    context.commit("update_lookup_order",2)
                    let data = {
                        records : resp.data.records,
                        total: resp.data.total
                    }
                    context.commit("update_mous",resp.data.records)
                    context.commit("update_mou",{})
                    context.commit("update_selected_mous",[])
                }
            } catch(e) {
            context.commit("update_lookup_order",3)
            }
        },
        async getcountkelainan(context, prm) {
            context.commit("update_get_data_status", 1)
            try {
                prm.token = one_token()
                console.log("Sending request to get_count_kelainan with params:", prm)
                let resp = await api.generatecountkelainan(prm)

                console.log("Response from get_count_kelainan:", resp)
                
                if (resp.status != "OK") {
                    console.error("Error status:", resp.status, resp.message)
                    context.commit("update_get_data_status", 3)
                } else {
                    console.log("Success! Data:", resp.data.data)
                    context.commit("update_get_data_status", 2)
                    context.commit("update_kelainan_count", resp.data.data)
                }
            } catch (e) {
                console.error("Exception in getcountkelainan:", e)
                context.commit("update_get_data_status", 3)
            }
        },

        async savekelainanselection(context, prm) {
            context.commit("update_loading_save", true)
            try {
                prm.token = one_token()
                let resp = await api.savekelainanselection(prm)

                if (resp.status != "OK") {
                    context.commit("update_save_status", 3)
                    context.commit("update_msg_info", resp.message)
                    context.commit("update_open_dialog_info", true)
                    return false;
                } else {
                    context.commit("update_save_status", 2)
                    context.commit("update_msg_success", "Data kelainan berhasil disimpan")
                    context.commit("update_dialog_success", true)
                    return true;
                }
            } catch (e) {
                context.commit("update_save_status", 3)
                return false;
            } finally {
                context.commit("update_loading_save", false)
            }
        },

        async generateDatabase(context) {
            context.commit("update_loading_generate", true);
            try {
                // Panggil API untuk generate, enkripsi, dan download file
                const downloadPrm = { 
                    db_name: "cpone_corporate", // Sesuai dengan logika backend
                    token: one_token()
                };
                const resp = await api.downloadDatabase(downloadPrm);

                if (resp.status === 200 && resp.data) {
                    // Membuat URL dari blob untuk diunduh
                    const url = window.URL.createObjectURL(new Blob([resp.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    
                    // Menentukan nama file dari header atau generate nama baru
                    const contentDisposition = resp.headers['content-disposition'];
                    let filename = `dump_cpone_corporate.dat`; // Default filename
                    if (contentDisposition) {
                        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/);
                        if (filenameMatch && filenameMatch.length > 1) {
                            filename = filenameMatch[1];
                        }
                    }
                    link.setAttribute('download', filename);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                } else {
                    throw new Error(resp.message || "Gagal mengunduh file terenkripsi.");
                }
            } catch (e) {
                console.error("Error generating database dump:", e);
            } finally {
                context.commit("update_loading_generate", false);
            }
        },

        async truncateDatabaseAction(context, prm) {
            context.commit("update_loading_create_db", true);
            context.commit("update_create_db_message", "Menghapus data lama...");
            try {
                const apiParams = { 
                    Mgm_McuID: prm.mgm_mcu_id,
                    confirm_truncate: prm.confirm_truncate,
                    token: one_token() 
                };
                const resp = await api.truncateDatabase(apiParams);
                if (resp.status !== "OK") {
                    throw new Error(`Gagal menghapus data lama: ${resp.message}`);
                }
                return true;
            } catch (e) {
                console.error("Error during truncate operation:", e);
                context.commit("update_msg_info", e.message);
                context.commit("update_open_dialog_info", true);
                context.commit("update_loading_create_db", false);
                return false;
            }
        },

        async createDatabase(context, prm) {
            // context.commit("update_loading_create_db", true);
            context.commit("update_create_db_progress", 0);
            const apiCalls = [
                { func: api.generateTable, name: "Table Setup" },
                { func: api.generateKelainanLab, name: "Kelainan Lab" },
                { func: api.generateKelainanNonLab, name: "Kelainan Non-Lab" },
                { func: api.generateKelainanFisik, name: "Kelainan Fisik" },
                { func: api.generateKelainanSummary, name: "Kelainan Summary" },
                { func: api.generateKelainanResultMcuLab, name: "Result MCU Lab" },
                { func: api.generateKelainanResultMcuNonLab, name: "Result MCU Non-Lab" },
                { func: api.generateResultMcuKenalWarna, name: "Result MCU Kenal Warna" },
                { func: api.generateResultMcuVisus, name: "Result MCU Visus" },
                { func: api.generateResultStatusGizi, name: "Result Status Gizi" },
                { func: api.generateResultMcuBodyFatMonitoring, name: "Result Body Fat Monitoring" },
                { func: api.generateResultMcuFisik, name: "Result MCU Fisik" },
                { func: api.generateAllResult, name: "All Results" }
            ];

            try {
                for (let i = 0; i < apiCalls.length; i++) {
                    const call = apiCalls[i];
                    const progressMessage = `Step ${i + 1}/${apiCalls.length}: Generating ${call.name}...`;
                    
                    context.commit("update_create_db_message", progressMessage);
                    context.commit("update_create_db_progress", ((i + 1) / apiCalls.length) * 100);

                    const apiParams = { 
                        Mgm_McuID: prm.mgm_mcu_id,
                        token: one_token() 
                    };
                    const resp = await call.func(apiParams);

                    if (resp.status !== "OK") {
                        if (resp.message === "No data found") {
                            console.warn(`Skipping step ${i + 1} (${call.name}): No data found.`);
                        } else {
                            throw new Error(`Failed at step ${i + 1} (${call.name}): ${resp.message}`);
                        }
                    }
                }

                context.commit("update_msg_success", "Database berhasil dibuat ulang.");
                context.commit("update_dialog_success", true);
                context.dispatch("getcountkelainan", { Mgm_McuID: prm.mgm_mcu_id });

            } catch (e) {
                console.error("Error during database creation:", e);
                context.commit("update_msg_info", e.message);
                context.commit("update_open_dialog_info", true);
            } finally {
                context.commit("update_loading_create_db", false);
                context.commit("update_create_db_progress", 0);
                context.commit("update_create_db_message", "");
            }
        }

    }
}