import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import ReturnType from 'typescript';
import { Container, Carrinho } from './styles';
import logo from '../../assets/images/logo.svg';
import { RootState } from '../../store/modules/rootReducer';

const mapStateToProps = (state: RootState) => ({
    carrinhoAmount: state.carrinho.products.length,
});

function Header({ carrinhoAmount }: ReturnType<typeof mapStateToProps>) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Ecommerce" />
            </Link>
            <Carrinho to="/carrinho">
                <div>
                    <strong>Meu carrinho</strong>
                    <span> {carrinhoAmount} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Carrinho>
        </Container>
    );
}

export default connect(mapStateToProps)(Header);