import Navbar from '../components/Navbar';
import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Outlet />
    </>
  );
}
