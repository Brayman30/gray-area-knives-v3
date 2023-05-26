<template>
    <nav>
        <!-- Desktop Menu -->
        <div class="bg-gray-200 flex justify-around">
            <!-- Menu-->
            <div class="flex justify-around flex-grow min-h-[12vh]">
                <!-- Logo-->
                <div class="flex items-center py-3 px-2">
                    <NuxtLink to="/">
                        <img class="w-16" src="/img/logo.png" />
                    </NuxtLink>
                    <span class="pl-4 text-5xl font-bold">Gray Area Knives</span>
                </div>
                <!-- Pages-->
                <ul class="flex flex-row px-1 items-center text-xl hover:children:text-primary-500 children:px-4">
                    <li v-for="link in links" :key="link.location">
                        <NuxtLink :to="link.location">
                            {{ link.text }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="js">
// console.log(this.$parent.$vnode.tag)
export default {
    data() {
        return {
            links: [
                {
                    location: '/',
                    text: 'Home'
                },
                {
                    location: '/about',
                    text: 'About'
                },
                {
                    location: '/portfolio',
                    text: 'Portfolio'
                },
                {
                    location: '/bts',
                    text: 'Behind The Scenes'
                },
                {
                    location: '/shop',
                    text: 'Shop'
                }
            ]
        }
    }
}
</script>
