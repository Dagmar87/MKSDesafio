import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import ReturnType from 'typescript';
import { Container, Carrinho, Title } from './styles';
import { RootState } from '../../store/modules/rootReducer';

const mapStateToProps = (state: RootState) => ({
    carrinhoAmount: state.carrinho.products.length,
});

function Header({ carrinhoAmount }: ReturnType<typeof mapStateToProps>) {
    return (
        <Container>
            <Title to="/">
                <div>
                    <h1>MKS Sistemas</h1>
                </div>
            </Title>
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