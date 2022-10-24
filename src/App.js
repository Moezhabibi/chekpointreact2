
import './App.css';
import Adress from './conpoment/profile/Adress';
import Fullname from './conpoment/profile/Fullname';
import { PHOTO } from './conpoment/profile/profilephoto';

function App() {
  return (
    <div className='moez'>
      <PHOTO/>
      <Fullname/>
      <Adress/>
    </div>
  );
}

export default App;
