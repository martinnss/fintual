
const veryConservativeStreep = async () =>{
  const response= await fetch('https://fintual.cl/api/real_assets/15077/days?from_date=%222022-01-01%22&to_date=%222022-12-21%22')
  var data = await response.json();
  const assets_12 = data.data[315].attributes.net_asset_value ;
  const assets_11 = data.data[314].attributes.net_asset_value ;
  let profit= (((assets_12-assets_11)/assets_11)*100).toFixed(3)+"%"

  document.getElementById('fund1').textContent=profit
}
veryConservativeStreep()


const conservativeClooney = async () =>{
  let response_1= await fetch('https://fintual.cl/api/real_assets/188/days?from_date=%222022-01-01%22&to_date=%222022-12-21%22')
  var data_1 = await response_1.json();
  let assets_12_1 = data_1.data[315].attributes.net_asset_value ;
  let assets_11_1 = data_1.data[314].attributes.net_asset_value ;
  let profit_1= (((assets_12_1-assets_11_1)/assets_11_1)*100).toFixed(3)+"%"

  document.getElementById('fund2').textContent=profit_1
}
conservativeClooney()


const moderatePit = async () =>{
  const response_2= await fetch('https://fintual.cl/api/real_assets/187/days?from_date=%222022-01-01%22&to_date=%222022-12-21%22')
  var data_2 = await response_2.json();
  const assets_12 = data_2.data[315].attributes.net_asset_value ;
  const assets_11 = data_2.data[314].attributes.net_asset_value ;
  let profit= (((assets_12-assets_11)/assets_11)*100).toFixed(3)+"%"

  document.getElementById('fund3').textContent=profit
}
moderatePit()


const riskyNorris = async () =>{
  const response= await fetch('https://fintual.cl/api/real_assets/186/days?from_date=%222022-01-01%22&to_date=%222022-12-21%22')
  var data = await response.json();
  const assets_12 = data.data[315].attributes.net_asset_value ;
  const assets_11 = data.data[314].attributes.net_asset_value ;
  let profit= (((assets_12-assets_11)/assets_11)*100).toFixed(3)+"%"

  document.getElementById('fund4').textContent=profit
}
riskyNorris()