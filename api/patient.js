const URL = "/one-api/cpone/mcuoffline/";

export async function getmgmmcu(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/getmgmmcu', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function search(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/search', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function generatesetup(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/generatesetup', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function getsexreg(token) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/getsexreg',{token:token});
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function savecsv(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/savecsv',prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function newpatient(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/newpatient',prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function xdelete(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/deletepatient',prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function getaddress(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/getaddress',prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function searchcity(token,prm) {
    try {
       var resp = await axios.post(URL + 'preregisterv2/searchcity',{token:token,search:prm});
       if (resp.status != 200) {
          return {
             status: "ERR",
             message: resp.statusText
          };
       }
       let data = resp.data;
       return data;
    } catch(e) {
       return {
          status: "ERR",
          message: e.message
       };
    }
 }

 export async function getdistrict(token,prm) {
    try {
       var resp = await axios.post(URL + 'preregisterv2/getdistrict',{id:prm.M_CityID,token:token});
       if (resp.status != 200) {
          return {
             status: "ERR",
             message: resp.statusText
          };
       }
       let data = resp.data;
       return data;
    } catch(e) {
       return {
          status: "ERR",
          message: e.message
       };
    }
 }

 export async function getkelurahan(token,prm) {
    try {
       var resp = await axios.post(URL + 'preregisterv2/getkelurahan',{token:token,id:prm.M_DistrictID});
       if (resp.status != 200) {
          return {
             status: "ERR",
             message: resp.statusText
          };
       }
       let data = resp.data;
       return data;
    } catch(e) {
       return {
          status: "ERR",
          message: e.message
       };
    }
 }

 
export async function savenewaddress(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/savenewaddress',prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function saveeditaddress(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/saveeditaddress',prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}

export async function deleteaddress(prm) {
    try {
        var resp = await axios.post(URL + 'preregisterv2/deleteaddress',prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}


export async function searchdoctor(prm) {
    try {
       console.log('aye')
       console.log(prm)
       var resp = await axios.post(URL + 'preregisterv2/searchdoctor',prm);
       if (resp.status != 200) {
          return {
             status: "ERR",
             message: resp.statusText
          };
       }
       let data = resp.data;
       return data;
    } catch(e) {
       return {
          status: "ERR",
          message: e.message
       };
    }
 }

 export async function searchcompany(prm) {
   try {
      var resp = await axios.post(URL + 'preregisterv2/searchcompany',prm);
      if (resp.status != 200) {
         return {
            status: "ERR",
            message: resp.statusText
         };
      }
      let data = resp.data;
      return data;
   } catch(e) {
      return {
         status: "ERR",
         message: e.message
      };
   }
}

export async function getmou(prm) {
    try {
       var resp = await axios.post(URL + 'preregisterv2/getmou',prm);
       if (resp.status != 200) {
          return {
             status: "ERR",
             message: resp.statusText
          };
       }
       let data = resp.data;
       return data;
    } catch(e) {
       return {
          status: "ERR",
          message: e.message
       };
    }
 }

 export async function savepreregisterv2(prm) {
    try {
       var resp = await axios.post(URL + 'preregisterv2/savepreregisterv2',prm);
       if (resp.status != 200) {
          return {
             status: "ERR",
             message: resp.statusText
          };
       }
       let data = resp.data;
       return data;
    } catch(e) {
       return {
          status: "ERR",
          message: e.message
       };
    }
 }
 
 export async function gotoreg(prm) {
    try {
       var resp = await axios.post(URL + 'preregisterv2/gotoreg',prm);
       if (resp.status != 200) {
          return {
             status: "ERR",
             message: resp.statusText
          };
       }
       let data = resp.data;
       return data;
    } catch(e) {
       return {
          status: "ERR",
          message: e.message
       };
    }
 }

export async function generatecountkelainan(prm) {
    const params = new URLSearchParams();
    for (const key in prm) {
        params.append(key, prm[key]);
    }
    try {
        var resp = await axios.post('/one-api/summarymcu/sqlgenerator/get_count_kelainan', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
     
}
 
export async function savekelainanselection(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/sqlgenerator/save_kelainan_selection',prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
     

}

export async function downloadDatabase(prm) {
    try { 
        var resp = await axios.post('/one-api/summarymcu/sqlgenerator/download', prm, {
            responseType: 'blob'
        });

        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText,
                data: null
            };
        }

        return resp;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }

}


export async function truncateDatabase(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/sqlgenerator/truncate_corporate_tables', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
   }
}

// 1. Generate Table Setup
export async function generateTable(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_table_setup', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 2. Generate Kelainan Lab
export async function generateKelainanLab(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_kelainan_lab', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}


// 3. Generate Kelainan Non-Lab
export async function generateKelainanNonLab(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_kelainan_nonlab', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 4. Generate Kelainan Fisik
export async function generateKelainanFisik(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_kelainan_fisik', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 5. Generate Kelainan Summary 
export async function generateKelainanSummary(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/summary_kelainan_sepuluh', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 6. Generate Result McuLab
export async function generateKelainanResultMcuLab(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_result_mcu_lab', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 7. Generate Kelainan Result McuNonLab
export async function generateKelainanResultMcuNonLab(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_result_mcu_nonlab', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 8. Generate Result Mcu Kenal Warna
export async function generateResultMcuKenalWarna (prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_result_mcu_kenal_warna', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 9. Generate generate_result_mcu_visus
export async function generateResultMcuVisus (prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_result_mcu_visus', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 10. Generate generate_result_mcu_status_gizi
export async function generateResultStatusGizi (prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_result_mcu_status_gizi', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 11. generate_result_mcu_bodyfatmonitoring
export async function generateResultMcuBodyFatMonitoring (prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_result_mcu_bodyfatmonitoring', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 12. generate_result_mcu_fisik
export async function generateResultMcuFisik (prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_result_mcu_fisik', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}

// 13. generate_all_results
export async function generateAllResult (prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/generatedata/generate_all_results', prm);
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        let data = resp.data;
        return data;
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    
    }
}
