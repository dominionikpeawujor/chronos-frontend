<template>
  <NavBar></NavBar>
  <div class="q-pa-xl">
    <q-table title="Cart" :rows="rows" row-key="name" />
    <q-btn color="primary" class="q-mt-xl" label="Checkout" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCounterStore } from 'src/stores/example-store';
import NavBar from 'src/components/Nav-bar.vue';

const store = useCounterStore();

const rows = ref([]);

onMounted(() => console.log(store.cart));

store.cart.forEach((item)=> {
  rows.value.push({
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    total: item.price * item.quantity,
  })
})

function deleteItem(item) {
  rows.value.filter((cartItem) => cartItem.id !== item.id)
}
</script>
