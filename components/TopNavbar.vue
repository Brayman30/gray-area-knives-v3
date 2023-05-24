<template>
    <nav>
        <!-- Desktop Menu -->
        <div class="bg-gray-300 flex justify-around">
            <!-- Menu-->
            <div class="flex justify-around flex-grow">
                <!-- Logo-->
                <div class="flex items-center py-4 px-2">
                    <NuxtLink to="/">
                        <img class="w-14" src="/img/logo.png" />
                    </NuxtLink>
                    <span class="pl-5 text-2xl">Gray Area Knives</span>
                </div>
                <!-- Pages-->
                <ul class="flex flex-row px-1 items-center">
                    <li v-for="(link, text) in links" :key="text" :value="link">
                        <NuxtLink class="hover:text-primary-600 px-2" :to="link">
                            {{ text }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script lang="js">
export default {
    data() {
        return {
            links: {
                'Home': '/',
                'About': '/about',
                'Portfolio': '/portfolio',
                'The Making Process': '/making',
                'Shop': '/shop'
            }
        }
    },
}
</script>
