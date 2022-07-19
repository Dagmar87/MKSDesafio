import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
import { connect, DispatchProp } from "react-redux";
import ReturnType from "typescript";
import { Container, ProductTable, Total } from "./styles";
import { RootState } from "../../store/modules/rootReducer";
import * as CarrinhoActions from "../../store/modules/carrinho/action";
import { Product } from "../../types";
import { formatPrice } from "../../util/ format";

const mapStateToProps = (state: RootState) => ({
  products: state.carrinho.products.map((product) => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.carrinho.products.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

type StateProps = ReturnType<typeof mapStateToProps>;

type Props = StateProps & DispatchProp;

function Carrinho(props: Props) {
  const { products, dispatch, total } = props;

  function incrementProduct(product: Product) {
    dispatch(
      CarrinhoActions.updateProductAmount(product.id, product.amount + 1)
    );
  }

  function decrementProduct(product: Product) {
    dispatch(
      CarrinhoActions.updateProductAmount(product.id, product.amount - 1)
    );
  }

  return (
    <Container>
      {products.map((product) => (
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>Produto</th>
              <th>QTDE</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={product.photo} alt="ProductI" />
              </td>
              <td>
                <strong>{product.name}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => decrementProduct(product)}
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c2" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => incrementProduct(product)}
                  >
                    <MdAddCircleOutline size={20} color="#7159c2" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CarrinhoActions.removeToCarrinho(product.id))
                  }
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>
      ))}
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>      
    </Container>
  );
}

export default connect(mapStateToProps)(Carrinho);
