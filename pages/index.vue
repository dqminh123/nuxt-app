<template>
    <br>
    <br>
    <div class="grid grid-cols-3 gap-5 ml-10">
            <div v-for="item in products" :key="item.id">
                <ProductCard :product="item" />
            </div>
        </div>

<br>
<br>

    <Footer />
</template>

<script setup>
import {} from 'flowbite'

const {data: products, pending, refresh, error}  = await useJsonPlaceholderData('https://fakestoreapi.com/products?limit=3',{
    cache: false
})

</script>

<style  scoped>

h2{
    margin-bottom: 36px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>