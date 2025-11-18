<template>
    <v-layout class="mb-2" column>
        <v-card>
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

        <v-card class="mt-4 pa-3" v-if="showGenerateDbButton" color="white" dark>
            <v-layout row wrap align-center justify-center text-xs-center>
                <v-flex xs12>
                    <h3 class="headline font-weight-light mb-2">Langkah Selanjutnya</h3>
                    <span class="font-weight-light">Pilihan kelainan telah disimpan. Anda sekarang siap untuk men-generate database.</span>
                </v-flex>
                <v-flex xs12 mt-3>
                    <v-btn x-large color="teal accent-4" class="glowing-btn" @click="generateDatabase">
                        <v-icon left>mdi-database-arrow-down</v-icon>
                        Generate Database
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card>

    </v-layout>
</template>

<style scoped>
    .glowing-btn {
        box-shadow: 0 0 5px rgba(0, 255, 255, 0.9), 0 0 10px rgba(0, 255, 255, 0.7);
        animation: glow 1.5s infinite alternate;
    }

    @keyframes glow {
        from {
            box-shadow: 0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.6);
        }
        to {
            box-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 0.8);
        }
    }

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
        this.$store.dispatch("patient/getcountkelainan", {
            Mgm_McuID: 151
        });
    },
    computed: {
        kelainanCount() {
            return this.$store.state.patient.kelainan_count
        },
        loading_save() {
            return this.$store.state.patient.loading_save
        },
        pages () {
            if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) 
                return 0

            return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
        }
    },
    
    methods: {
        async saveSelection() {
            if (this.selectedKelainan.length !== 10) {
                alert("Harap pilih tepat 10 kelainan.");
                return;
            }

            const payload = {
                mgm_mcu_id: 151,
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
        }
    },

  }
</script>