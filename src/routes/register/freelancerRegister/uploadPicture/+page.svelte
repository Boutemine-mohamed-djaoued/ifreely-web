<script>
  import { onMount } from "svelte";
  import LeftSide from "../../../components/register/LeftSide.svelte";
  import MainBtn from "$lib/components/ui/MainButton.svelte";

  let selectedFile = null;
</script>

<div class="flex full-width h-[100vh] bg-transparent max-lg:flex-col max-lg:">
  <LeftSide number="4"></LeftSide>
  <div class="lg:hidden image h-[40%]"></div>
  <div
    class="mx-auto my-auto flex justify-center items-center gap-5 overflow-hidden"
  >
    <form
      action=""
      method="get"
      class="circle lg:h-[min(50vw,100vh)] lg:w-[min(50vw,100vh)] h-[100vw] w-[100vw]"
    >
      <h1 class="font-medium absolute top-[20%] text-400 2xl:text-600">
        Upload your profile picture
      </h1>
      <div class="circle-inner">
        <div class="circle-inner-inner">
          <label for="userImage" class="w-fit h-fit">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
              src="/register/UserImage.png"
              alt="user-image"
              class="rounded-full w-full h-full cursor-pointer"
            />
          </label>
          <input
            type="file"
            name="user-image"
            id="userImage"
            accept=".png, .jpg, .jpeg"
            capture
            class="hidden"
            required
            bind:value={selectedFile}
          />
        </div>
      </div>
      <div class="flex gap-4 items-center absolute bottom-[15%]">
        {#if selectedFile}
          <a href="/register/freelancerRegister/finishProfile">
            <MainBtn title="Continue" customClass="btn-1" type="submit" />
          </a>
          <a
            href="/register/freelancerRegister/aboutFreelancer"
            class="text-[#BE2AB1] font-semibold"
          >
            Back
          </a>
        {:else}
          <MainBtn title="Continue" customClass="btn-1" type="submit" />
          <a
            href="/register/freelancerRegister/aboutFreelancer"
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
  * {
    font-family: "DM Sans", sans-serif;
  }
  .image {
    background-image: url("/register/RectangleSmall.png");
    background-size: cover;
    background-position: center bottom;
  }
  .circle {
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: colorTransition 1s infinite;
  }

  .circle-inner {
    position: absolute;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: colorTransition2 1s infinite;
  }

  .circle-inner-inner {
    width: 60%;
    height: 60%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: colorTransition3 1s infinite;
  }

  /* .circle-inner-inner-inner {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    animation: colorTransition4 5s infinite alternate;
  } */

  @keyframes colorTransition {
    0% {
      background-color: #8d00bb03;
    }
    50% {
      background-color: #8d00bb0d;
    }
    100% {
      background-color: #8d00bb05;
    }
  }
  @keyframes colorTransition2 {
    0% {
      background-color: #8d00bb05;
    }
    50% {
      background-color: #8d00bb03;
    }
    100% {
      background-color: #8d00bb0d;
    }
  }
  @keyframes colorTransition3 {
    0% {
      background-color: #8d00bb0d;
    }
    50% {
      background-color: #8d00bb05;
    }
    100% {
      background-color: #8d00bb03;
    }
  }
  /* @keyframes colorTransition4 {
    0% {
      background-color: #e74c3c;
    }
    50% {
      background-color: #f39c12;
    }
    100% {
      background-color: #3498db;
    }
  } */
</style>
