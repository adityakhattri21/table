const data = '[["machine_name","machine_id","current","voltage","power_factor","active_power","apparent_power","reactive_power","daily_energy","monthly_energy","yearly_energy","idle_daily","idle_monthly","idle_yearly"], ["Auto Winding Machine", "machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]]'
const classArray= ['mName_','mId_','today_','mtd_','ytd_','ap_','app_','rp_','c_','v_','pf_','itt_','itm_','ity_']
const p_data = JSON.parse(data)

for(let i=1;i<3;i++){
  let current = i.toString()
  for(let j=0;j<14;j++){
    const element ='.'+classArray[j]+current
    document.querySelector(element).innerText =p_data[i][j]
  }

}
