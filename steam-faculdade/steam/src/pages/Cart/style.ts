import styled from 'styled-components';

export const CartPage = styled.main`
  justify-content: space-evenly;

  margin-top: 2rem;
  background: var(--background);
  height: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  .title-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 423px;
    width: 100%;

    title {
      display: flex;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 42px;
      color: #ffffff;
    }
    strong {
      color: #ffffff;
    }
  }
`;

export const GridContent = styled.div`
  display: grid;
  margin-top: 30px;

  .contentGame {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 3px rgba(255, 255, 255, 0.2);
    max-height: 223px;
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .imgInfo {
      max-width: 501px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .imgGame {
        max-height: 394px;

        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .amountName {
        color: white;
        display: grid;
        font-weight: 400;

        span:nth-child(2) {
          margin-top: 30px;
          font-weight: 300;
          font-size: 18px;
        }
      }
    }

    .icons {
      display: flex;
      justify-content: space-evenly;
      max-width: 324px;
      width: 100%;
      div {
        height: 78px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
