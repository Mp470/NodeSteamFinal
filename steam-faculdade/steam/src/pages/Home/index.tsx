import { Header } from '../../components/Header';
import { HomePage, Section01, Section02 } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Jogos } from '../interface/IJogos';
import iconLinux from '../../assets/svg/linux-penguin.svg';
import windowsIcon from '../../assets/svg/windows.svg';
import iconIpple from '../../assets/svg/apple.svg';

export type UserCart = {
  _id: string;
  userId: string;
  total: string;
  createdAt: Date;
  jogos: string[];
};

function Home() {
  const [weekleGames, setWeekleGames] = useState<Jogos[]>();
  const [userCart, setUserCart] = useState<any>();

  useEffect(() => {
    axios
      .get('http://localhost:8080/Jogos')
      .then((response) => setWeekleGames(response.data));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8080/Carrinho')
      .then((response) => setUserCart(response.data));
  }, []);

  const games = weekleGames;

  return (
    <>
      <Header jogosAmout={userCart[0].jogos} />
      <HomePage>
        <Section01>
          <Carousel
            infiniteLoop={true}
            interval={3000}
            autoPlay={false}
            axis='horizontal'
            showThumbs={false}
            showArrows={false}
            autoFocus={true}
          >
            {games?.map((game: Jogos) => (
              <div key={game._id}>
                <img src={game.capa} />
                <div className='game-details'>
                  <strong>{game.titulo}</strong>
                  <p>R$ {game.preco}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </Section01>

        <Section02>
          <div className='games-grid'>
            {games?.map((game) => {
              <div className='content' key={game._id}>
                <div className='imgGame'>
                  <img src={game.capa} alt='' />
                </div>

                <div className='info'>
                  <div className='amountName'>
                    <span>{game.titulo}</span>
                    <span>R$ {game.preco}</span>
                  </div>
                  <div className='icons'>
                    <img src={iconLinux} alt='iconLinux' />
                    <img src={windowsIcon} alt='windowsIcon' />
                    <img src={iconIpple} alt='iconIpple' />
                  </div>
                </div>
              </div>;
            })}
          </div>
        </Section02>
      </HomePage>
    </>
  );
}

export { Home };
