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
                    <li class="not-children underline font-semibold text-primary-500">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/bts">Behind the Scenes</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/shop">Shop</NuxtLink>
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
