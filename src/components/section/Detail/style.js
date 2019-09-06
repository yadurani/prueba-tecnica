import styled from 'styled-components';
const URL_BG = 'https://image.tmdb.org/t/p/w1400_and_h450_face/';
export const DetailContent = styled.div`
  align-items: center;
  background-color: #363636;
  background-image: url('${props => props.image && `${URL_BG}${props.image}`}');
  background-position: top center;
  background-size: cover;
  color: white;
  display:flex;
  min-height: calc(100vh - 60px);
  padding: 20px 10px;
  position: relative;
  width: 100%;
  img {
    width: 100%;
    box-shadow: 0 0 20px rgba(0,0,0,0.5)
  }
  &:before {
    background: rgba(0,0,0,0.8);
    bottom:0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .detail__team {
    h4 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
      font-weight: 300;
    }
  }
  h2 {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 44px;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom:15px;
  }
  span {
    align-items: center;
    background: #01d277;
    border-radius: 100%;
    display: flex;
    font-size: 16px;
    font-weight: 900;
    height: 35px;
    justify-content: center;
    margin-bottom: 20px;
    position: absolute;
    right: -1px;
    top: 16px;
    width: 35px;
  }
  .col-sm-12 {
    position: relative;
  }
  .container {
    z-index: 10;
  }
`;
