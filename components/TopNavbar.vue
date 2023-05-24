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
                    <li>
                        <NuxtLink
                            class="hover:bg-opacity-20 hover:text-primary-600 px-2"
                            to="/"
                        >
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="hover:bg-opacity-20 hover:text-primary-600 px-2"
                            to="/about"
                        >
                            About Us
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
