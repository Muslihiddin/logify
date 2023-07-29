<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
definePageMeta({
  layout: "login-layout",
});

const {  errors, defineComponentBinds } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
  }),
});

const email = defineComponentBinds("email",);
const password = defineComponentBinds("password");
</script>

<template>
  <main
    class="pt-[40px] md:pl-[100px] md:pr-[160px] md:pt-[100px] flex flex-col md:flex-row md:items-center md:justify-between"
  >
    <section class="pb-[120px]">
      <h2 class="font-semibold text-[26px] md:text-[50px]">Sign in to</h2>
      <h4
        class="font-medium text-[21px] md:text-[35px] mt-[5px] mb-[32px] md:mb-[50px]"
      >
        Lorem ipsum is simply
      </h4>
      <p>If you don't have an account</p>
      <p>
        You can
        <NuxtLink to="/register"
          ><span class="text-primary">Register here !</span></NuxtLink
        >
      </p>
    </section>
    <section>
      <h2 class="hidden md:inline-block font-medium text-[30px]">Sign in</h2>
      <form class="mt-[28px] flex flex-col">
        <BaseInput
          v-bind="email"
          placeholder="Enter email or username"
          class="mb-[38px]"
        />
        <BaseInput v-bind="password" placeholder="Password" class="mb-[18px]" />

        <p class="ml-auto text-hint text-[13px]">Forgot password ?</p>

        <BaseButton label="Submit" class="mt-[46px]" />

        <div class="mt-[54px]">
          <p class="text-center text-hint">or continue with</p>
          <div class="mt-[45px] flex justify-center gap-[20px]">
            <img src="../assets/Facebook.svg" alt="Facebook Logo" />
            <img src="../assets/apple.svg" alt="Apple Logo" />
            <img src="../assets/google.svg" alt="Google Logo" />
          </div>
        </div>
      </form>
    </section>
  </main>
</template>
