import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px;
  background: #0F52BA
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: left;
    margin-left: 10px;
    h1 {
      display: block;
      color: #fff;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 19px;
      mix-blend-mode: normal;
    }
  }
`;


export const Carrinho = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #fff;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
