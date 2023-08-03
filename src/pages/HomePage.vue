<template>
  <NavBar></NavBar>
  <q-page class="grid row q-pa-xl">
    <q-card
      class="my-card wrap q-pa-auto col-6 col-md-4"
      v-for="item in items"
      :key="item.id"
      flat
    >
      <div class="q-img">
        <q-img :src="item.img_def" />
      </div>

      <q-card-section class="text-center">
        <q-btn
          fab
          :title="message"
          color="primary"
          icon="shopping_cart"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
          @click="cart.addToCart(item)"
        />

        <div class="no-wrap text-center">
          <div class="text-h6 ellipsis text-center">
            {{ item.name }}
          </div>
        </div>

        <q-rating v-model="stars" @input="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none text-center">
        <div class="text-subtitle1">${{ item.price }}</div>
        <div class="text-caption text-grey">
          {{ item.desc }}
        </div>
      </q-card-section>

      <q-card-section class="quantity-input">
        <p>Quantity</p>
        <q-input
          class="q-input"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          outlined
          v-model="item.quantity"
          type="number"
          prefix=""
          width="10px"
          placeholder="Enter Quantity"
          
        ></q-input>
      </q-card-section>

      <q-separator />
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from 'src/components/Nav-bar.vue';
import { useCounterStore } from 'src/stores/example-store'; 

const stars = ref(4);

const cart = useCounterStore();

const message = 'Add to Cart';

const items = [
  {
    id: 1,
    name: 'Balenciaga',
    price: '299.00',
    img: 'https://unsplash.com/photos/a-QH9MAAVNI',
    img_def: 'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
    desc: 'Small plates, salads & sandwiches in an intimate setting.',
  },
  {
    id: 2,
    name: 'Air Max',
    price: '329.00',
    img: 'https://unsplash.com/photos/kP6knT7tjn4',
    img_def: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
    desc: "Hit the road with style in Nike's new ait edition",
  },
  {
    id: 3,
    name: 'Brags',
    price: '419.00',
    img: '',
    img_def: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
    desc: 'Small plates, salads & sandwiches in an intimate setting.',
  },
];


</script>

<style>
.quantity-input > .q-input {
  width: 10em;
  border-radius: 100px;
  display: flex;
  margin: 0 auto;
}

.q-img {
  width: 13em;
  height: 13em;
  object-fit: cover;
  display: flex;
  margin: 0 auto;
}

.quantity-input {
  text-align: center;
}

</style>
