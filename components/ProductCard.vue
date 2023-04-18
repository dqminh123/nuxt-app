<template>
    <div class="card text-center">
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product?.title }}</p>
        <!-- <pre>{{ JSON.stringify(product, undefined, 2) }}</pre> -->
        <NuxtLink :to="`/products/${product.id}`">
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Detail</button>
        </NuxtLink>
    </div>
</template>

<script setup>
const {product} = defineProps(['product'])
</script>

<style  scoped>
.thumb{
    max-height: 150px;
    max-width: 70%;
    margin: 0 auto;
}
</style>