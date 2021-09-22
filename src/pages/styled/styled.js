import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const btn = styled.button`
  border-radius: 3px;
  background: #1dd21dc7;
  border: none;
  font-size: 1.5rem;
  margin-left: 1rem;
  padding: 5px;
  cursor: pointer;

  &:hover{
    background: #009c00c7;
  }
`;

export const ipt = styled.input`
  border: none;
  background: #ccc;
  font-size: 1.5rem;
  border-radius: 3px;
  padding: 5px;
`; 

export const Lista = styled.ul`
  list-style: none;
  margin-top: 2rem;

  li + li{
    margin-top: 0.5rem;
  }
`;

export const linha = styled.li`
  margin: 0 0.5rem;
  padding: 0.5rem;
  background: #000;
  color: #ccc;
  font-size: 1.2rem;
`;

export const Links = styled(Link)`
  display: block;
  text-align: center;
  padding: 15px 10px;
  background: #1dd21dc7;
  width: 4rem;
  margin: 2rem 0.5rem;
  text-decoration: none;
  color: #000;

  &:hover{
    background: #009c00c7;
  }
`;

export const Aviso = styled.p`
  margin: 2rem 0.5rem;
  color: red;
  font-size: 1.2rem;
`;
