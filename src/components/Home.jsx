
// import './App.css';



import Header from './Header';
import {useState , useEffect} from 'react';
import Punklist from './Punklist';
import Main from './Main';
import axios from 'axios';
import './Home.css'
import CollectionCard from '../components/CollectionCard'



let Home = ( ) => {

    const [punkListData , setPunkListData] = useState([])
    const [selectedPunk , setSelectedPunk] = useState(0)
    
        
    
  useEffect(() => {
    const getMyNfts = async ()=>{

      
      const openseaData =  await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x7aa3b7500eB82405D5128D29b73C57423B97bB0a&order_direction=asc'
      )
          
         setPunkListData(openseaData.data.assets)
    } 

  return getMyNfts()
}, [])


  return (
    <>
      
        
<div className='home'>
<Header />
  {
      
      punkListData.length > 0 && (
        <>
        <Main  punkListData={punkListData} selectedPunk={selectedPunk}/>
        <Punklist punkListData={punkListData} 
         setSelectedPunk={setSelectedPunk} />
      
      </>
      )            

  }
 
 </div>


    </>
  );
};

export default Home;


