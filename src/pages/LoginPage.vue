<template>
  <q-header elevated>
    <q-toolbar class="header">
      <q-toolbar-title>Dominion's E-commerce Site</q-toolbar-title>

      <div></div>
    </q-toolbar>
  </q-header>

  <q-page class="row items-center justify-evenly">
    <q-card flat class="my-card">
      <q-form>
        <p>Email</p>
        <q-input filled v-model="email" />
        <br />
        <p>Password</p>
        <q-input filled v-model="password" />
        <br />
        <q-btn
          no-caps
          flat
          label="Login"
          class="btn"
          type="submit"
          icon-right="login"
        />
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref();
const password = ref();
</script>

<style>
.my-card {
  padding: 10px;
  width: 100%;
  max-width: 50vh;
  height: 30vh;
}
.header {
  background-color: firebrick;
}

p {
  margin: 0;
  padding: 0;
}
.btn {
  width: 100%;
}
</style>
