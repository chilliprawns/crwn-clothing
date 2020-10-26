import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => {
  console.log('toggleCartHidden action run');
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  }
}

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})