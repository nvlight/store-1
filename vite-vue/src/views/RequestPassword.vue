<template>
    <GuestLayout title="Запрос нового пароля">
        <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true"/>
            <div class="-space-y-px rounded-md shadow-sm">
                <div>
                    <label for="email-address" class="sr-only">Емейл</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required=""
                           class="relative block w-full rounded-t-md rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           placeholder="Емейл"/>
                </div>

            </div>

            <div class="flex items-center justify-end">

                <div class="text-sm">
                    <router-link
                        :to="{name: 'login'}"
                        class="font-medium text-indigo-600 hover:text-indigo-500">
                        Войти в аккаунт
                    </router-link>
                </div>
            </div>

            <div>
                <button type="submit"
                        class="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                        </span>
                    <span>Запросить</span>
                </button>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup>
import {LockClosedIcon} from '@heroicons/vue/20/solid'
import {ref, computed} from "vue";
import store from "../store/index.js";
import GuestLayout from "../components/GuestLayout.vue"

const email = computed(() => store.state.user.email)

</script>

<style scoped>

</style>
