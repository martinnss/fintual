import axios from 'axios'

const allFunds = async () =>{
    const petition_1= await axios.get('https://fintual.cl/api/real_assets/15077/days?from_date=%222022-01-01%22&to_date=%222022-12-21%22')
    var data = await petition_1.json();
    console.log(data);
}
export {
    allFunds
}
