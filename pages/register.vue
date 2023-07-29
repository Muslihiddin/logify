<script setup lang="ts">
definePageMeta({
  layout: "login-layout",
});

const email = ref("");
const username = ref("");
const contact = ref("");
const password = ref("");
const confirm = ref("");
</script>

<template>
  <main
    class="pt-[40px] md:pl-[100px] md:pr-[160px] md:pt-[10px] flex flex-col md:flex-row md:items-center md:justify-between"
  >
    <section class="md:pb-[160px]">
      <h2 class="font-semibold text-[26px] md:text-[50px]">Sign up to</h2>
      <h4
        class="font-medium text-[21px] md:text-[35px] mt-[5px] mb-[32px] md:mb-[50px]"
      >
        Lorem ipsum is simply
      </h4>
      <p>If you don't have an account</p>
      <p>
        You can
        <NuxtLink to="/login"
          ><span class="text-primary">Login here !</span></NuxtLink
        >
      </p>
    </section>
    <section>
      <h2 class="hidden md:inline-block font-medium text-[30px]">Sign up</h2>
      <form class="mt-[28px] flex flex-col">
        <BaseInput
          v-model="email"
          placeholder="Enter Email"
          class="mb-[18px]"
        />
        <BaseInput
          v-model="username"
          placeholder="Create Username"
          class="mb-[18px]"
        />
        <BaseInput
          v-model="contact"
          placeholder="Contact number"
          class="mb-[18px]"
        />
        <BaseInput
          v-model="password"
          placeholder="Password"
          class="mb-[18px]"
        />
        <BaseInput
          v-model="confirm"
          placeholder="Confirm Password"
          class="mb-[28px]"
        />

        <BaseButton label="Register" class="mt-[46px]" />

        <div class="mt-[54px]">
          <p class="text-center text-hint">or continue with</p>
          <div class="mt-[45px] flex justify-center gap-[20px]">
            <img src="../assets/Facebook.svg" />
            <img src="../assets/apple.svg" />
            <img src="../assets/google.svg" />
          </div>
        </div>
      </form>
    </section>
  </main>
</template>
