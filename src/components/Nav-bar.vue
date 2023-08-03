<template>
  <q-header elevated>
    <q-toolbar class="bg-blue q-pa-md text-white">
      <q-toolbar-title>
        <router-link class="router-link" to="/"
          >Dominion's E-commerce website</router-link
        >
      </q-toolbar-title>
      <q-btn
        @click="$router.push('/cart')"
        flat
        round
        size="1.2em"
        dense
        icon="shopping_cart"
      >
        <q-badge floating left="0" color="red" v-if="cartCount.cartCount">{{ cartCount.cartCount }}</q-badge>
      </q-btn>
      <q-btn
        @click="$router.push('/auth')"
        label="Login"
        flat
      />
      <q-btn icon="assignment_ind" flat
        round
        size="1.9em"
        dense
        >
        <q-menu>
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <q-toggle v-model="mobileData" label="Use Mobile Data" />
              <q-toggle v-model="bluetooth" label="Bluetooth" />
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

              <q-btn
                color="primary"
                label="Logout"
                @click="$router.push('/auth')"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<style>
.router-link {
  text-decoration: none;
  color: white;
}
</style>

<script setup>
import {ref} from 'vue'

import { useCounterStore } from 'src/stores/example-store';

const bluetooth = ref(true)

const mobileData = ref(true)

const cartCount = useCounterStore()
</script>
