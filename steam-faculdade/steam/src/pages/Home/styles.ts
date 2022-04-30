import styled from 'styled-components';

export const HomePage = styled.main`
  justify-content: space-evenly;

  margin-top: 2rem;
  background: var(--background);
  height: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
`;

export const Section01 = styled.div`
  justify-content: center;
  div {
    width: 800px;
    border-radius: 3%;
  }
  .game-details {
    justify-content: flex-start;
    color: white;
    margin-bottom: 50px;
    height: 50px;
    border-radius: 0 0 20px 20px;
    background-color: var(--grey);
    background: var(--purple);

    strong {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.9rem;
    }
    p {
      font-family: 'Yaldevi Colombo Light';
      font-weight: 300;
      font-size: 25px;
      line-height: 30px;
      align-items: center;
    }
  }
`;

export const Section02 = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  .games-grid {
    display: grid;
    max-width: 1135px;
    width: 100%;
    gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(min(536px, 100%), 1fr));
    padding: 15px;

    .content {
      max-width: 536px;
      max-height: 408px;
      width: 100%;
      height: 100%;
      display: grid;
      filter: drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.25));

      .imgGame {
        max-height: 333px;

        height: 100%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
      }
      .info {
        display: flex;
        max-height: 75.56px;
        height: 100%;
        border-radius: 0px 0px 20px 20px;
        justify-content: space-between;
        padding: 10px;
        background: #610094;

        font-size: 24px;

        .amountName {
          color: white;
          display: grid;
          padding-left: 10px;
          font-weight: 400;

          span:nth-child(2) {
            font-weight: 300;
            font-size: 18px;
          }
        }
        .icons {
          display: flex;
          justify-content: space-evenly;
          max-width: 170px;
          width: 100%;
        }
      }
    }
  }
`;
