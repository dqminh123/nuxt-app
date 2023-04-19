<script setup>
import { ref } from 'vue';
const checkbox = ref(true);
var { data: firstname } = ref('');
  var { data: lastname } = ref('');
  var { data: username } = ref('');
  var { data: email } = ref('');
  var { data: password } = ref('');
  const userregister = (async () => {
    console.log(email, password, username, firstname, lastname);
    await $fetch('http://localhost:3001/api/users/register', {
      method: 'POST',
      body: {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password
      }

    }).then(res => { console.log(res) })
    await navigateTo('/login', {
      external: true
    })
  });
</script>

<template>
  <!-- <form @submit.prevent="userLogin" >
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email"  id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password"  id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
      </div>
      <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> -->

<!-- <div class="login">
      <form @submit.prevent="userLogin">
        <label for="chk" aria-hidden="true">Login</label>
          <input variant="outlined" type="email" name="email" placeholder="Email" required>
          <input variant="outlined" type="Password" name="pswd" placeholder="Password" required>
          <button type="submit" color="#573b8a" width="60%" height="40px">Sign in</button>
        </form>
      </div> -->

  <div class="signup">
    <form>
      <label for="chk" aria-hidden="true">Sign up</label>
      <input type="text" name="txt" placeholder="User name" required>
      <input v-model="email" type="email" name="email" placeholder="Email" required>
      <input v-model="password" type="Password" name="pswd" placeholder="Password" required>
      <button>Sign up</button>
    </form>
  </div>
</template>
<style>
.signup {
  height: 450px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(220px);
  transition: .8s ease-in-out;
}

label {
  color: black;
  transform: scale(0.6);
}

@media (max-width: 750px) {
  label {
    font-size: 2.27em;
  }
}

#chk:checked~.signup {
  transform: translateY(-180px);
}

#chk:checked~.signup label {
  transform: scale(0.75);
}