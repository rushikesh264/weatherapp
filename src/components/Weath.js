import React,{useState} from 'react';
import './Stylecss.css';
import Cclouds from '../assets/cloudy.png'
import Rrain from '../assets/rain.png'
import Ssun from '../assets/sun.png'
import Sstrom from '../assets/Sstrom.png'
import Wwindy from '../assets/windy.png'
import Ttemp from '../assets/temperature.png'
const listyle={
    fontweight:"bolder",height:"auto",border:"none",boxShadow:"none",width:"auto",padding:"10px",textAlign:"center",fontSize:"20px"

}
const imgstyle={width:"150px",height:"150px"}
export default function Weath() {
  let Days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const [Data,setData]=React.useState({});
  const [City,setCity]=React.useState('');
  const [weather,setweather] = useState({});
  const apicurrent={
    key:"1fe6c4d3e32d54de0ae20c4e109164b1",
    base:"https://api.openweathermap.org/data/2.5/"
}

  
  const api={
      base:' https://api.openweathermap.org/data/2.5/forecast?',
      key:'1fe6c4d3e32d54de0ae20c4e109164b1',
  }
  const CreateDate=(d)=>
  {
     
      let Months=['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
      let day = Days[d.getDay()];
      let date = d.getDate();
      let month = Months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`

  }


  function Search(evt)
  {
      if(evt.key==="Enter")
      {
          
          fetch(`${api.base}q=${City}&units=metric&appid=${api.key}`)
          .then(r=>r.json())
          .then(res=>setData(res))
          .catch(Error=>console.log("Error ali",Error))

          fetch(`${apicurrent.base}weather?q=${City}&units=metric&appid=${apicurrent.key}`)
          .then(r=>r.json())
          .then(res=>{setweather(res);
        setCity('')})
          .catch(error=>{
            console.log("error ali22",error);
                        })
      }
  }
  return (
    <div
    //  className={
    //     ((typeof Data.list != "undefined" && typeof Data.list[0].weather != "undefined")?
    //     (Data.list[0].main.temp<20?'app':'app-warm'):
    //     'app-warm')
    //     }
       
        >
       
            
        <main>
      
            
        <div className="searchBox">
            <input className="searchBar" placeholder="Enter City Name..." type="text" onChange={(e)=>setCity(e.target.value)} onKeyPress={Search} value={City}/>
          
        </div>
          
            {(typeof Data.list != "undefined" && typeof Data.list[0].weather != "undefined" && (typeof weather.main !="undefined")?
                (<div>
                        <div>
                                    <div  className="locationBox">
                                             <div className="location">
                                                    {Data.city.name}({Data.city.country})
                                            </div>
                                     <div className="date">{new Date().toString()}</div>
                                           
                                    </div>

                                    <div className="Container">
                                        <div className="title">
                                            <div className="date">{CreateDate(new Date())}</div>
                                        </div>
                                        <ul>
                                            <li style={listyle}>{ ((weather.weather[0].main === 'Clouds')? (<img src={Cclouds} alt=" " style={imgstyle}></img>):((weather.weather[0].main === 'Rain')?  (<img src={Rrain} alt=" " style={imgstyle}></img>):((weather.weather[0].main === 'Storm')?(<img src={Sstrom} alt=" " style={imgstyle}/>):(<img src={Ssun} alt=" " style={imgstyle}/>))))}</li>
                                            <li style={listyle}><img src={Ttemp} alt=" " style={{width:"70px",height:"70px"}}/>   {Math.round(weather.main.temp)}&#8451;</li>
                                            <li style={listyle}>{weather.weather[0].main}</li>
                                            <li style={listyle}><img src={Wwindy} alt=" " style={{width:"70px",height:"70px"}}/>  Wind-{weather.wind.speed} m/s</li>
                                            <li style={listyle}>{weather.weather[0].description}</li>
                                            <li style={listyle}>Humidity- {weather.main.humidity}%</li>  

                                        </ul>
                                    </div>
                                   

                               
          
                                       
                                        
                                        <div className="Container">
                                        <div className="title">
                                                    Next 6 days
                                        </div>
                                        <ul>                                        
                                            {Data.list.filter((data,index)=>[8,16,24,31,39].includes(index)).map((data,index)=><li key={index} >
                                                <div className="title">
                                                    {Days[new Date(data.dt_txt).getDay()]}
                                                </div>
                                                <div className="weatherBoxNext">
                                                    <div className="tempNext">
                                                        { ((data.weather[0].main === 'Clouds')? (<img src={Cclouds} alt=" "></img>):((data.weather[0].main === 'Rain')?  (<img src={Rrain} alt=" " ></img>):(<img src={Ssun} alt=" "/>)))}
                                                        <div>{Math.round(data.main.temp)}&#8451;</div>
                                                        <div style={{fontSize:"10px"}}>Wind-{data.wind.speed} m/s</div>
                                                        <div style={{fontSize:"10px"}}>Humidity-{data.main.humidity}%</div>
                                                    </div>
                                                </div> 
                                            </li>)}
                                            </ul>
                                        </div> 
                                        
 
                                 
                        </div>
                
                </div>):null)
            }


        </main>
    </div>
  );
}
