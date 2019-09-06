import styled from 'styled-components';

export const Navbar = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  a {
    font-size: 14px;
    margin-right: 20px;
    color: white;
  }
  a:last-child {
    margin-right: 0px;
  }
`;
