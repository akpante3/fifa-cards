<template>
    <div class="loader"></div>
  </template>
  
  <script>
  export default {
    name: "loader",
  };
  </script>
  
  <style scoped lang="scss">
  .loader {
    border: 10px solid var(--light-gray-color);
    border-radius: 50%;
    border-top: 10px solid var(--brand-color);
    width: 100px;
    height: 100px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  /* Safari */
@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  