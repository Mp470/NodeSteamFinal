import { Header } from '../../components/Header';
import { CartInfo, CartPage, GridContent } from './style';
import avatar from '../../assets/avatar.jpg';
import iconLinux from '../../assets/svg/linux-penguin.svg';
import windowsIcon from '../../assets/svg/windows.svg';
import iconIpple from '../../assets/svg/apple.svg';
function Cart() {
  return (
    <>
      <Header />
      <CartPage>
        <CartInfo>
          <div className='title-cart'>
            <title>SEU CARRINHO DE COMPRAS QUANTIDADE: 4 </title>
          </div>
        </CartInfo>
        <GridContent>
          <div className='contentGame'>
            <div className='imgInfo'>
              <div className='imgGame'>
                <img src={avatar} alt='' />
              </div>
              <div className='amountName'>
                <span>GTA 5</span>
                <span>R$ 120,00</span>
              </div>
            </div>

            <div className='icons'>
              <div>
                <img src={iconLinux} alt='iconLinux' />
              </div>
              <div>
                <img src={windowsIcon} alt='windowsIcon' />
              </div>
              <div>
                <img src={iconIpple} alt='iconIpple' />
              </div>
            </div>
          </div>

          <div className='contentGame'>
            <div className='imgInfo'>
              <div className='imgGame'>
                <img src={avatar} alt='' />
              </div>
              <div className='amountName'>
                <span>GTA 5</span>
                <span>R$ 120,00</span>
              </div>
            </div>

            <div className='icons'>
              <img src={iconLinux} alt='iconLinux' />
              <img src={windowsIcon} alt='windowsIcon' />
              <img src={iconIpple} alt='iconIpple' />
            </div>
          </div>
        </GridContent>
      </CartPage>
    </>
  );
}

export { Cart };
