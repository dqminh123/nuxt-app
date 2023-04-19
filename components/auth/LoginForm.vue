<script setup >
import { ref } from 'vue';
const checkbox = ref(true);
var {data:email}=ref('');
var {data:password} = ref('');
const userLogin= (async ()=>{
    console.log(email,password);
   await $fetch('http://localhost:3001/api/users/login', { 
      method: 'POST',
      body: {
        email : email,
        password: password
      }
      
    }).then(res=> {console.log(res)})
    await navigateTo('/',{
        external: true  
    })
        
    

   
    // ctxd.setuserKey(data['key'])


    // alert(JSON.stringify(data.key))
})
</script>

<template>
    <!-- <v-row class="d-flex mb-3">
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Name</v-label>
            <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Email Address</v-label>
            <v-text-field variant="outlined" type="email" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Password</v-label>
            <v-text-field variant="outlined" type="password"  hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12" >
            <v-btn to="/" color="primary" size="large" block   flat>Sign up</v-btn>
        </v-col>
    </v-row> -->
 
        <div class="login">
      <form @submit.prevent="userLogin">
        <label for="chk" aria-hidden="true">Login</label>
        <input v-model="email" variant="outlined" type="email" name="email" placeholder="Email" required>
        <input v-model="password" variant="outlined" type="Password" name="pswd" placeholder="Password" required>
        <button class="btn" type="submit" color="#573b8a" width="60%" height="40px">Sign in</button>
      </form>
    </div>
</template>
<style>
.login
{
    position: relative;
    width: 100%;
    height: 15%;
}
#chk:checked ~ .login label{
    transform: scale(.75);
    transform: translateY(-180px);
}
label{
    color: #fff;
    font-size: 2.3em;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}
input{
    width: 60%;
    height: 20px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
}
.btn{
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    background: #573b8a;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
}
.btn:hover{
    background: #6d44b8;
}
</style>
