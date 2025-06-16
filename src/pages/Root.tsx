import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import BackgroundProvider from '../store/BackgroundContext';

export default function Root() {
  return (
    <BackgroundProvider>
      <Header>
        <Navbar />
      </Header>
      <Outlet />
    </BackgroundProvider>
  );
}
