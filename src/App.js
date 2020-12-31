import {useState} from 'react' 
import Black2020 from './components/Black2020';
import Home from './components/Home';
import Welcome2021 from './components/Welcome2021';
import "./main.css"

function App() {

  const[black2020Visible,setblack2020Visible]=useState(true);
  const[welcome2020Visible,setwelcome2020Visible]=useState(false);
  const[homeVisible,sethomeVisible]=useState(false);

  return (
    <div className="App">
      {black2020Visible && <Black2020 setblack2020Visible={setblack2020Visible} setwelcome2020Visible={setwelcome2020Visible}/>}
      {welcome2020Visible && <Welcome2021 setwelcome2020Visible={setwelcome2020Visible} sethomeVisible={sethomeVisible}/>}
      {homeVisible && <Home />}
    </div>
  );
}

export default App;
