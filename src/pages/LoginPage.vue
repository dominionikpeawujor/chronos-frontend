<template>
  <NavBar></NavBar>

  <q-page class="row items-center justify-evenly">
    <q-card flat class="my-card">
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <q-form>
            <p>Email</p>
            <q-input dense filled v-model="email" />
            <br />
            <p>Password</p>
            <q-input dense filled v-model="password" />
            <br />
            <q-btn
              no-caps
              outline
              label="Login"
              class="btn"
              type="submit"
              icon-right="login"
              :to="{ name: 'HomePage' }"
            />
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="signup" class="">
          <q-form>
            <p>First Name</p>
            <q-input dense filled v-model="firstName" />
            <br />
            <p>Last Name</p>
            <q-input dense filled v-model="lastName" />
            <br />
            <p>Email</p>
            <q-input dense filled v-model="email" />
            <br />
            <p>Password</p>
            <q-input dense filled v-model="password" />
            <br />
            <q-btn
              no-caps
              outline
              label="Sign Up"
              :to="{ name: 'HomePage' }"
              class="btn"
              type="submit"
            />
          </q-form>
        </q-tab-panel>
      </q-tab-panels>

      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="red"
        indicator-color="red"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="signup" label="SignUp" />
      </q-tabs>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavBar from 'src/components/Nav-bar.vue';
// import Navbar from 'src/components/Navbar.vue';

const tab = ref('login');
const firstName = ref();
const lastName = ref();
const email = ref();
const password = ref();
</script>

<style>
.my-card {
  padding: 10px;
  width: 100%;
  max-width: 70vh;
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
  padding: 10px;
  width: 100%;
}
</style>
