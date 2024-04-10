// import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import LocationComponent from './pages/Location';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/location' element={<LocationComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}