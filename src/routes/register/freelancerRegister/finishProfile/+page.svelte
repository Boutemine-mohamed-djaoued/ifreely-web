<script>
  import { onMount } from "svelte";
  import LeftSide from "../../../components/register/LeftSide.svelte";
  import MainBtn from "$lib/components/ui/MainButton.svelte";

  let job;
  let userName;
  let lastName;
  let firstName;

  let valid = false;
  let rate;
  let description = "";
  $: valid = rate > 0 && description != "";

  function saveUserRate() {
    sessionStorage.setItem("userRate", JSON.stringify(rate));
  }
  function saveUserDescription() {
    sessionStorage.setItem("userDescription", JSON.stringify(description));
  }

  function loadFormData() {
    const savedRate = sessionStorage.getItem("userRate");
    if (savedRate) {
      rate = JSON.parse(savedRate);
    }
    const savedDescription = sessionStorage.getItem("userDescription");
    if (savedDescription) {
      description = JSON.parse(savedDescription);
    }
    const savedFirstName = sessionStorage.getItem("firstName");
    if (savedFirstName) {
      firstName = JSON.parse(savedFirstName);
    }
    const savedLastName = sessionStorage.getItem("lastName");
    if (savedLastName) {
      lastName = JSON.parse(savedLastName);
    }
    const savedJob = sessionStorage.getItem("userJob");
    if (savedJob) {
      job = JSON.parse(savedJob);
    }
  }
  $: userName = firstName + " " + lastName;

  onMount(loadFormData);

  function clearSession() {
    sessionStorage.clear();
    localStorage.clear();
  }
</script>

<div class="flex full-width h-[100vh] bg-transparent max-lg:flex-col">
  <LeftSide number="5"></LeftSide>
  <div class="lg:hidden image h-[40%]"></div>
  <div
    class="mx-auto my-auto flex justify-center items-center gap-5 max-lg:w-[60%] max-sm:w-[80%] w-[30%] max-lg:items-start"
  >
    <form action="" method="get" class="flex flex-col gap-4 w-full">
      <h1 class="text-500/6 font-normal my-[5%] px-4 w-full">
        Finish your profile
      </h1>
      <div class="user_info flex gap-3 items-center w-full">
        <img
          src="/register/UserImage.png"
          alt="profile_image"
          class="w-[6vw] min-w-[90px]"
        />
        <div class="">
          <h3 class="font-semibold text-300 2xl:text-400">{userName}</h3>
          <p class="text-[12px] leading-3 text-[#ABABAB]">{job}</p>
        </div>
      </div>
      <input
        type="number"
        name="user_rate"
        id=""
        placeholder="Give us your rate"
        required
        min="0"
        class="w-full 2xl:text-400"
        bind:value={rate}
        on:input={saveUserRate}
      />
      <textarea
        name="Description"
        id=""
        placeholder="Description"
        class="w-full 2xl:text-400"
        bind:value={description}
        on:input={saveUserDescription}
      ></textarea>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="flex gap-4 items-center w-full">
        {#if valid}
          <a href="/" on:click={clearSession}>
            <MainBtn title="Finish" customClass="btn-1" />
          </a>
          <a
            href="/register/freelancerRegister/uploadPicture"
            class="text-[#BE2AB1] font-semibold"
          >
            Back
          </a>
        {:else}
          <div>
            <MainBtn title="Finish" customClass="btn-1" />
          </div>
          <a
            href="/register/freelancerRegister/uploadPicture"
            class="text-[#BE2AB1] font-semibold"
          >
            Back
          </a>
        {/if}
      </div>
    </form>
  </div>
</div>

<style>
  input {
    margin: 2px 0;
    border-radius: 5px;
    border: solid #c499f3 1px;
    color: #747474;
    font-weight: 400;
    min-height: 41px;
    height: 4.7vh;
  }

  textarea {
    margin: 2px 0;
    border-radius: 5px;
    border: solid #c499f3 1px;
    color: #747474;
    font-weight: 400;
    height: calc(12.6vw - 4.5rem);
    min-height: 100px;
  }
  * {
    font-family: "DM Sans", sans-serif;
  }

  /* Hide the default arrow controls */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }

  .image {
    background-image: url("/register/RectangleSmall.png");
    background-size: cover;
    background-position: center bottom;
  }
</style>
