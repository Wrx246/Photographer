import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Navbar from './components/Navbar';
import PhotoDetails from './components/photos/photoDetails/PhotoDetails';
import Photos from './components/photos/Photos';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/photos/:id' element={<PhotoDetails />} />
      </Routes>
    </>
  );
}

export default App;
