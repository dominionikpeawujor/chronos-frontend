import { defineStore } from 'pinia';
import { CartItem } from './dto/stores.dto';

export const useCounterStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[],
  }),

  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
  },
  actions: {
    addToCart(item: CartItem) {
      // Find the item in the cart based on its ID
      const existingCartItem = this.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        // If the item is already in the cart, update its quantity
        existingCartItem.quantity = item.quantity;
      } else if (item.quantity > 0) {
        // If the item is not in the cart and has a valid quantity, add it to the cart
        this.cart.push({ ...item });
      } else {
        // If the item is not in the cart and has no quantity, show an alert
        alert('You need to fill in a quantity');
      }

      console.log(this.cart);
    },
  },
});
