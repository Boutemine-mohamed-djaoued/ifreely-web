<script>
  export let title = "";
  export let customClass;
  export let type;
  export let customWidth;
  export let customHeight;
  export let customBoxShadow;
</script>

<button
  class="height bg-[#BE2AB1] text-white rounded-md  text-250/4 flex justify-center items-center {customClass}"
  
  style="width: {customWidth}; height: {customHeight} ; box-shadow: {customBoxShadow} ;"
  type={type}
  >{title} &nbsp;&nbsp;  
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7091 17.71L17.7091 12.71C17.8002 12.6149 17.8715 12.5028 17.9191 12.38C18.0191 12.1365 18.0191 11.8635 17.9191 11.62C17.8715 11.4973 17.8002 11.3851 17.7091 11.29L12.7091 6.29C12.6159 6.19676 12.5052 6.1228 12.3834 6.07234C12.2616 6.02188 12.131 5.99591 11.9991 5.99591C11.7328 5.99591 11.4774 6.1017 11.2891 6.29C11.1008 6.47831 10.995 6.7337 10.995 7C10.995 7.2663 11.1008 7.5217 11.2891 7.71L14.5891 11L6.99913 11C6.73391 11 6.47956 11.1054 6.29202 11.2929C6.10448 11.4804 5.99913 11.7348 5.99913 12C5.99913 12.2652 6.10448 12.5196 6.29202 12.7071C6.47956 12.8946 6.73391 13 6.99913 13L14.5891 13L11.2891 16.29C11.1954 16.383 11.121 16.4936 11.0702 16.6154C11.0195 16.7373 10.9933 16.868 10.9933 17C10.9933 17.132 11.0195 17.2627 11.0702 17.3846C11.121 17.5064 11.1954 17.617 11.2891 17.71C11.3821 17.8037 11.4927 17.8781 11.6145 17.9289C11.7364 17.9797 11.8671 18.0058 11.9991 18.0058C12.1311 18.0058 12.2618 17.9797 12.3837 17.9289C12.5056 17.8781 12.6162 17.8037 12.7091 17.71Z" fill="white"/>
    </svg>
    
</button>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");
  .btn-1 {
    /* width: max(14ch, 10vw); */
    font-family: "DM Sans", sans-serif;

  }
  .height {
    /* height: max(clamp(1.8rem, calc(1.6rem + 1.3vw), 4rem), 5vh); */
    /* height: 35px; */
    padding:0 14px;
    font-size: 14px;
    line-height: 35px;
}
</style>
