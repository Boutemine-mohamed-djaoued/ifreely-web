<script>
  import { onMount } from "svelte";
  import LeftSide from "../../../components/register/LeftSide.svelte";
  import MainBtn from "$lib/components/ui/MainButton.svelte";
  import { jobStore } from "$lib/stores/register.js";

  let job;
  // jobStore.subscribe((data) => {
  //   job = data;
  // });
  // function addJob() {
  //   jobStore.update(() => {
  //     return job;
  //   });
  // }

  let workExperience = "";
  let education = "";
  let skills;
  let goal = "";

  $: valid =
    workExperience !== "" &&
    education !== "" &&
    job !== "" &&
    skills !== "" &&
    goal !== "";

  function saveUserJob() {
    sessionStorage.setItem("userJob", JSON.stringify(job));
  }
  function saveUserSkills() {
    sessionStorage.setItem("userSkills", JSON.stringify(skills));
  }
  function saveUserEducation() {
    sessionStorage.setItem("userEducation", JSON.stringify(education));
  }
  function saveUserWork() {
    sessionStorage.setItem("userWork", JSON.stringify(workExperience));
  }
  function saveUserGoal() {
    sessionStorage.setItem("userGoal", JSON.stringify(goal));
  }

  function loadFormData() {
    const savedJob = sessionStorage.getItem("userJob");
    if (savedJob) {
      job = JSON.parse(savedJob);
    }
    const savedSkills = sessionStorage.getItem("userSkills");
    if (savedSkills) {
      skills = JSON.parse(savedSkills);
    }
    const savedWork = sessionStorage.getItem("userWork");
    if (savedWork) {
      workExperience = JSON.parse(savedWork);
    }
    const savedGoal = sessionStorage.getItem("userGoal");
    if (savedGoal) {
      goal = JSON.parse(savedGoal);
    }
    const savedEducation = sessionStorage.getItem("userEducation");
    if (savedEducation) {
      education = JSON.parse(savedEducation);
    }
  }

  onMount(loadFormData);

  function JobFunctions() {
    saveUserJob();
    saveUserSkills();
  }
</script>

<div class="flex full-width h-[100vh] bg-transparent max-lg:flex-col">
  <LeftSide number="3"></LeftSide>
  <div class="lg:hidden image h-[40%]"></div>
  <div
    class="mx-auto max-lg:w-[60%] max-sm:w-[80%] w-[35%] my-auto flex flex-col gap-5"
  >
    <h1 class="text-500 font-medium">Tell us more about you!</h1>
    <form action="" method="get" class="flex flex-col gap-4">
      <div class="data">
        <input
          type="text"
          name="work-experience"
          placeholder="Work Experience"
          class="w-full"
          required
          bind:value={workExperience}
          on:input={saveUserWork}
        />
        <input
          type="text"
          name="education"
          id=""
          placeholder="Education"
          class="w-full"
          required
          bind:value={education}
          on:input={saveUserEducation}
        />
        <input
          type="text"
          name="skills"
          id=""
          placeholder="Skills"
          class="w-full"
          required
          bind:value={skills}
          on:input={saveUserSkills}
        />
        <input
          type="text"
          name="job-title"
          id=""
          placeholder="Job title"
          class="w-full"
          required
          bind:value={job}
          on:input={JobFunctions}
        />
        <!-- addJob(); -->
        <input
          type="text"
          name="goal"
          id=""
          placeholder="What's your goal"
          class="w-full"
          required
          bind:value={goal}
          on:input={saveUserGoal}
        />
      </div>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="flex gap-4 items-center">
        {#if valid}
          <a href="/register/freelancerRegister/uploadPicture">
            <MainBtn title="Continue" customClass="btn-1" />
          </a>
          <a href="/register" class="text-[#BE2AB1] font-semibold"> Back </a>
        {:else}
          <div>
            <MainBtn title="Continue" customClass="btn-1" />
          </div>
          <a
            href="/register/freelancerRegister"
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
    margin: 8px 0;
    border-radius: 5px;
    border: solid #c499f3 1px;
    color: #747474;
    font-weight: 400;
    /* height: min(41px, ) */
    /* height: min(40, 4.7vh);
     */
    min-height: 41px;
    height: 4.7vh;
    /* height: min(40, calc(3.1*vh+16)); */
  }
  * {
    font-family: "DM Sans", sans-serif;
  }
  .image {
    background-image: url("/register/RectangleSmall.png");
    background-size: cover;
    background-position: center bottom;
  }
</style>
