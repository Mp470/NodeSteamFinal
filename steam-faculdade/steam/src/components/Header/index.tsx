import { Cart, Container, HeaderItens, CartContent } from './style';
import { Search, ShoppingBag } from 'react-feather';
import avatar from '../../assets/avatar.jpg';

type CartProp = {
  jogosAmout: any;
};

function Header({ jogosAmout }: CartProp) {
  return (
    <Container>
      <HeaderItens>
        <div>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='search-box'>
          <div>
            <Search />
            <input placeholder='Serch' type='text' />
          </div>
        </div>
      </HeaderItens>

      <Cart>
        <CartContent>
          <ShoppingBag />
          <strong>{jogosAmout?.length}</strong>
        </CartContent>
      </Cart>
    </Container>
  );
}
export { Header };
