<template>
      <HelloWorld :user="user"  />
       <input type="text" v-model="user.name" @change="display">
        <input type="number" v-model="user.age">



        <div v-if="user.age < 18"> 
      trop jeune</div>
    <div v-else="user.age> 18 ">
    trop vieux


    </div>


</template>




<script setup>
import HelloWorld from '@/components/HelloWord.vue'
import { reactive } from 'vue';


const user = reactive({
  name: 'allan',
  age: '33'
});


const display = () => {
  console.log(user.name);
}

display();


</script>