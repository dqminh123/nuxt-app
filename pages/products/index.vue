<template>
    <br>
    <br>
    <div >
        <div class="grid grid-cols-4 gap-5">
            <div v-for="item in products" :key="item.id">
                <ProductCard :product="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {} from 'flowbite'
definePageMeta({
    layout : 'default'
})

const {data: products}  = await useFetch('https://fakestoreapi.com/products')
</script>

<style  scoped>

</style>