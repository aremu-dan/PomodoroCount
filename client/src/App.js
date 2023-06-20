import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    'minute': 29,
    'sec': 59
  })

  const countDown = () => {
    let temp = {...data};

    const myTimeout = setInterval(() => {
      if(temp['sec'] === 0){
        if(temp['minute'] > 0){
          temp['sec'] = 59;
          temp['minute']--;
        }
      }else{
        temp['sec']--;
      }

      if(temp['minute'] === 0 && temp['sec'] === 0){
        clearInterval(myTimeout);
      }

      setData({...temp}, [console.log(temp)]);
    }, 1000);
  }

  return (
    <div className="App">
      <div className="App_timer">
        <div className="App_timer-minute">
          <div>{data['minute']}</div>
        </div>
        <div className="App_timer-divide">
          <div></div>
        </div>
        <div className="App_timer-sec" onClick={()=>countDown()}>
          <div>{data['sec']}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
