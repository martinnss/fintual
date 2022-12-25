
import './index'

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

const fintualLogo='https://fintual.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa98fb620-b3e4-4035-bc37-d086b0bd1a3f%2Fimagotype-reg.png?id=afe4ff3d-b1be-4453-a8c7-2630e01622e5&table=block&spaceId=9985050f-b673-4063-ada0-b448e02d5db7&width=1060&userId=&cache=v2'

function App() {
  return (
    <div className="body">
      <div className='header'>
        <a href='https://fintual.cl/'><img alt='fintual logo' src={fintualLogo} /></a>
      </div>
      <div className='intro'>
        <h1>¿Cuál es la rentabilidad de los fondos de Fintual?</h1>
        <p>Para el 12 de noviembre la rentabilidad es la siguiente:</p>
      </div>
      <div className="funds">
        <p>Very Conservative Streep: <span id='fund1'></span></p><br></br>
        <p>Conservative Clooney: <span id='fund2'></span></p><br></br>
        <p>Moderate Pit: <span id='fund3'></span></p><br></br>
        <p>Risky Norris: <span id='fund4'></span></p><br></br>
      </div>
      <div className='buttons'>
        <div className='button1'>
          <button type="button">Script Python</button>
        </div>
        <div className='button2'>
          <button type="button">Script Javacript</button>
        </div>
      </div>
      <strong><p>Hecho por Martín Olivares para Fintual</p></strong>
    </div>
  );
}

export default App;
