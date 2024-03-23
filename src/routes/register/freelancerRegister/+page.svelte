<script>
  import { onMount } from "svelte";
  import LeftSide from "../../components/register/LeftSide.svelte";
  import MainBtn from "../../../lib/components/ui/MainButton.svelte";
  
  $: userName = firstName + " " + lastName;

  function addUserName() {
    userNameStore.update(() => {
      return userName;
    });
  }

  let firstName;
  let lastName = "";
  $: fullname = firstName + lastName;
  let email = "";
  let validMail = true;
  let password = "";
  let isStrongPassword = true;
  let select = "";
  let telephone = "";
  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      validMail = true;
    } else {
      validMail = false;
    }
  }

  // Regular expressions to check password strength
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;

  // Check if password meets the criteria for strength
  let isUppercase;
  let isLongEnough;
  let isLowercase;
  let hasNumber;
  $: {
    isUppercase = uppercaseRegex.test(password);
    isLowercase = lowercaseRegex.test(password);
    hasNumber = numberRegex.test(password);
    isLongEnough = password.length >= 8;
  }
  let checkPasswordStrength = () => {
    // Set isStrongPassword based on the criteria
    isStrongPassword = isUppercase && isLowercase && hasNumber && isLongEnough;
  };

  $: valid =
    fullname !== "" &&
    isStrongPassword &&
    select !== "" &&
    telephone !== "" &&
    email !== "" &&
    validMail;

  const wilayas = [
    { name: "Adrar", nameWithoutSpaces: "Adrar", number: 1 },
    { name: "Chlef", nameWithoutSpaces: "Chlef", number: 2 },
    { name: "Laghouat", nameWithoutSpaces: "Laghouat", number: 3 },
    { name: "Oum El Bouaghi", nameWithoutSpaces: "OumElBouaghi", number: 4 },
    { name: "Batna", nameWithoutSpaces: "Batna", number: 5 },
    { name: "Béjaïa", nameWithoutSpaces: "Béjaïa", number: 6 },
    { name: "Biskra", nameWithoutSpaces: "Biskra", number: 7 },
    { name: "Béchar", nameWithoutSpaces: "Béchar", number: 8 },
    { name: "Blida", nameWithoutSpaces: "Blida", number: 9 },
    { name: "Bouira", nameWithoutSpaces: "Bouira", number: 10 },
    { name: "Tamanrasset", nameWithoutSpaces: "Tamanrasset", number: 11 },
    { name: "Tébessa", nameWithoutSpaces: "Tébessa", number: 12 },
    { name: "Tlemcen", nameWithoutSpaces: "Tlemcen", number: 13 },
    { name: "Tiaret", nameWithoutSpaces: "Tiaret", number: 14 },
    { name: "Tizi Ouzou", nameWithoutSpaces: "TiziOuzou", number: 15 },
    { name: "Alger", nameWithoutSpaces: "Alger", number: 16 },
    { name: "Djelfa", nameWithoutSpaces: "Djelfa", number: 17 },
    { name: "Jijel", nameWithoutSpaces: "Jijel", number: 18 },
    { name: "Sétif", nameWithoutSpaces: "Sétif", number: 19 },
    { name: "Saïda", nameWithoutSpaces: "Saïda", number: 20 },
    { name: "Skikda", nameWithoutSpaces: "Skikda", number: 21 },
    { name: "Sidi Bel Abbès", nameWithoutSpaces: "SidiBelAbbès", number: 22 },
    { name: "Annaba", nameWithoutSpaces: "Annaba", number: 23 },
    { name: "Guelma", nameWithoutSpaces: "Guelma", number: 24 },
    { name: "Constantine", nameWithoutSpaces: "Constantine", number: 25 },
    { name: "Médéa", nameWithoutSpaces: "Médéa", number: 26 },
    { name: "Mostaganem", nameWithoutSpaces: "Mostaganem", number: 27 },
    { name: "Msila", nameWithoutSpaces: "M’Sila", number: 28 },
    { name: "Mascara", nameWithoutSpaces: "Mascara", number: 29 },
    { name: "Ouargla", nameWithoutSpaces: "Ouargla", number: 30 },
    { name: "Oran", nameWithoutSpaces: "Oran", number: 31 },
    { name: "El Bayadh", nameWithoutSpaces: "ElBayadh", number: 32 },
    { name: "Illizi", nameWithoutSpaces: "Illizi", number: 33 },
    {
      name: "Bordj Bou Arréridj",
      nameWithoutSpaces: "BordjBouArréridj",
      number: 34,
    },
    { name: "Boumerdès", nameWithoutSpaces: "Boumerdès", number: 35 },
    { name: "El Tarf", nameWithoutSpaces: "ElTarf", number: 36 },
    { name: "Tindouf", nameWithoutSpaces: "Tindouf", number: 37 },
    { name: "Tissemsilt", nameWithoutSpaces: "Tissemsilt", number: 38 },
    { name: "El Oued", nameWithoutSpaces: "ElOued", number: 39 },
    { name: "Khenchela", nameWithoutSpaces: "Khenchela", number: 40 },
    { name: "Souk Ahras", nameWithoutSpaces: "SoukAhras", number: 41 },
    { name: "Tipaza", nameWithoutSpaces: "Tipaza", number: 42 },
    { name: "Mila", nameWithoutSpaces: "Mila", number: 43 },
    { name: "Aïn Defla", nameWithoutSpaces: "AïnDefla", number: 44 },
    { name: "Naâma", nameWithoutSpaces: "Naâma", number: 45 },
    { name: "Aïn Témouchent", nameWithoutSpaces: "AïnTémouchent", number: 46 },
    { name: "Ghardaïa", nameWithoutSpaces: "Ghardaïa", number: 47 },
    { name: "Relizane", nameWithoutSpaces: "Relizane", number: 48 },
    { name: "Timimoun", nameWithoutSpaces: "Timimoun", number: 49 },
    {
      name: "Bordj Baji Mokhtar",
      nameWithoutSpaces: "BordjBajiMokhtar",
      number: 50,
    },
    { name: "Ouled Djellal", nameWithoutSpaces: "OuledDjellal", number: 51 },
    { name: "Beni Abbes", nameWithoutSpaces: "BeniAbbes", number: 52 },
    { name: "In Salah", nameWithoutSpaces: "InSalah", number: 53 },
    { name: "In Guezzam", nameWithoutSpaces: "InGuezzam", number: 54 },
    { name: "Touggourt", nameWithoutSpaces: "Touggourt", number: 55 },
    { name: "Djanet", nameWithoutSpaces: "Djanet", number: 56 },
    { name: "El M’ghair", nameWithoutSpaces: "ElMghair", number: 57 },
    { name: "El Menia", nameWithoutSpaces: "ElMenia", number: 58 },
  ];

  function saveUserFirstName() {
    sessionStorage.setItem("firstName", JSON.stringify(firstName));
  }
  function saveUserLastName() {
    sessionStorage.setItem("lastName", JSON.stringify(lastName));
  }
  function saveUserEmail() {
    sessionStorage.setItem("email", JSON.stringify(email));
  }
  function saveUserPassword() {
    sessionStorage.setItem("password", JSON.stringify(password));
  }
  function saveUserTelephone() {
    sessionStorage.setItem("telephone", JSON.stringify(telephone));
  }

  function loadFormData() {
    const savedFirstName = sessionStorage.getItem("firstName");
    if (savedFirstName) {
      firstName = JSON.parse(savedFirstName);
    }
    const savedLastName = sessionStorage.getItem("lastName");
    if (savedLastName) {
      lastName = JSON.parse(savedLastName);
    }
    const savedEmail = sessionStorage.getItem("email");
    if (savedEmail) {
      email = JSON.parse(savedEmail);
    }
    const savedTelephone = sessionStorage.getItem("telephone");
    if (savedTelephone) {
      telephone = JSON.parse(savedTelephone);
    }
    const savedPassword = sessionStorage.getItem("password")
    if (savedPassword){
      password = JSON.parse(savedPassword);
    }
  }
  onMount(loadFormData);

</script>

<div class="flex full-width h-[100vh] bg-transparent max-lg:flex-col max-lg:">
  <LeftSide number="2"></LeftSide>
  <div class="lg:hidden image h-[40%]"></div>
  <div
    class="mx-auto max-lg:w-[60%] max-sm:w-[80%] w-[35%] my-auto flex flex-col gap-5"
  >
    <h1 class="text-500 font-medium">Create an account</h1>
    <form action="" method="get" class="flex flex-col gap-4">
      <div class="data">
        <div class="flex gap-3">
          <input
            type="text"
            name="firstName"
            id=""
            placeholder="First name"
            required
            bind:value={firstName}
            class="w-full shrink"
            on:input={saveUserFirstName}
          />
          <input
            type="text"
            name="familyName"
            id=""
            placeholder="Familly name"
            required
            bind:value={lastName}
            class="w-full shrink"
            on:input={saveUserLastName}
          />
        </div>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          class="w-full"
          required
          bind:value={email}
          on:input={saveUserEmail}
        />
        {#if !validMail}
          <p class="text-red-600 text-250 ml-4">please enter a valid mail</p>
        {/if}
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          class="w-full"
          required
          bind:value={password}
          on:input={saveUserPassword}
          
        />
        {#if !isStrongPassword}
          {#if !isLongEnough}
            <p class="text-red-600 text-250 ml-4">
              Password must contain at least 8 characteres
            </p>
          {:else if !isUppercase}
            <p class="text-red-600 text-250 ml-4">
              Password must contain at least one Uppercase char
            </p>
          {:else if !isLowercase}
            <p class="text-red-600 text-250 ml-4">
              Password must contain at least one Lowercase char
            </p>
          {:else if !hasNumber}
            <p class="text-red-600 text-250 ml-4">
              Password must contain at least one number
            </p>
          {/if}
        {/if}

        <select
          name="wilaya"
          id=""
          required
          bind:value={select}
          class="w-full my-3"
          on:click={checkPasswordStrength}
        >
          <option value="" disabled selected>-Select wilaya-</option>
          {#each wilayas as wilaya}
            <option value={wilaya.nameWithoutSpaces}
              >{wilaya.number}- {wilaya.name}</option
            >
          {/each}
        </select>

        <input
          type="tel"
          name="phoneNumber"
          id=""
          placeholder="Phone number"
          class="w-full"
          required
          bind:value={telephone}
          on:input={saveUserTelephone}
        />
      </div>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="flex gap-4 items-center"
        on:click={() => {
          validateEmail();
          checkPasswordStrength();
        }}
      >
        {#if valid}
          <a href="/register/freelancerRegister/aboutFreelancer" on:click={checkPasswordStrength}>
            <MainBtn title="Continue" customClass="btn-1" type="submit" />
          </a>
          <a href="/register" class="text-[#BE2AB1] font-semibold"> Back </a>
        {:else}
        <div on:click={checkPasswordStrength}>
          <MainBtn title="Continue" customClass="btn-1" type=""/>
        </div>
          <a href="/register" class="text-[#BE2AB1] font-semibold"> Back </a>
        {/if}
      </div>
    </form>
  </div>        
</div>

<style>
  input,
  select {
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
  @media (min-width: 1536px) {
    .heightImage {
      height: calc(200px + 2.5vw);
      width: auto;
    }
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0.5em; /* Adjust padding as needed */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position: right calc(0.5em + 2px) center; /* Adjust position as needed */
    background-size: 0.8em; /* Adjust size as needed */
    border: 1px solid #ccc; /* Add border for better visibility */
    border-radius: 4px; /* Add border radius for better appearance */
  }
</style>
