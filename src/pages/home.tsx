import ConnectionOptions from '../components/ConnectionOptions';
import MainWrapper from '../components/MainWrapper';
import Hero from '../components/home-components/Hero';

const optionsList = [
  {
    image: '/copper.jpg',
    url: '/copper',
    content: 'Copper',
  },
  {
    image: '/msan.jpg',
    url: '/msan',
    content: 'MSAN (FTTC)',
  },
  {
    image: '/ftth.jpg',
    url: '/ftth',
    content: 'FTTH',
  },
];

export default function HomePage() {
  return (
    <>
      <MainWrapper>
        <Hero />
        <ConnectionOptions options={optionsList} />
      </MainWrapper>
    </>
  );
}
