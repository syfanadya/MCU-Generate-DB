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

export async function dumpDatabase(prm) {
    try {
        var resp = await axios.post('/one-api/summarymcu/sqlgenerator/dump_database_sql', prm, {
            responseType: 'blob' // Penting untuk mengunduh file
        });
        
        if (resp.status != 200) {
            return {
                status: "ERR",
                message: resp.statusText
            };
        }
        
        return resp; // Mengembalikan seluruh objek respons
    } catch (e) {
        return {
            status: "ERR",
            message: e.message
        };
    }
}