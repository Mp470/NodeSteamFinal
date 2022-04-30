import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 166px;
  justify-content: center;
  align-items: center;

  background: var(--background);
`;

export const HeaderItens = styled.div`
  display: flex;

  width: 1080px;
  height: 92px;
  align-items: center;
  justify-content: space-evenly;
  background: var(--background);
  img {
    border: 3px solid #610094;
  }

  div:nth-child(1) {
    display: flex;

    height: 80px;
    width: 100px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 80%;
    border-color: var(--grey);
  }

  .search-box {
    width: 400px;
    border-radius: 20px;
    border: 4px solid #444444;
    align-items: center;
    background: var(--background);

    div {
      display: flex;

      justify-content: space-around;
      margin: 0;

      padding-left: 1rem;
      width: 240px;
      height: 40px;
      align-items: center;

      svg {
        background: var(--background);
        color: #ffffff;
      }

      input[type='text'] {
        height: 80%;
        width: 200;
        background-color: var(--background);
        border: none;
        color: #ffffff;
        line-height: 32px;
        outline: none;
        ::placeholder {
          font-family: 'Yaldevi Colombo Medium';
          font-weight: 500;
          font-size: 1rem;
          color: #ffffff;
        }
      }
    }
  }
`;

export const Cart = styled.div`
  display: flex;

  height: 92px;
  margin-right: 5rem;
`;

export const CartContent = styled.div`
  display: flex;

  svg {
    color: white;
  }
  strong {
    margin-left: 0.7rem;
    padding: 0.1rem;
    size: 20px;
    color: #ffffff;
    font-weight: 600;
  }
  justify-content: center;
  align-items: center;
`;
