<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="container">
    <header>
      <h3>哈基生命科技公司</h3>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <p style="font-size: 0.75em;">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
    </footer>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(1004px, 3fr) 1fr;
  grid-template-rows: 60px auto 40px;
}

/* 小屏幕手机 */
@media (max-width: 1024px) {
  .container {
    grid-template-columns: 10px 1fr 10px;
    grid-template-rows: 50px auto 30px;
  }
}

/* 小屏幕手机 */
@media (max-width: 480px) {
  /* .container {
    grid-template-columns: 10px 1fr 10px;
  } */
}

.container header {
  grid-column: 1 / span 3;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container main {
  grid-column: 2 / span 1;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.container footer {
  grid-column: 1 / span 3;
  background-color: #fff;
  border-top: 1px solid #eee;

  display: flex;

  align-items: center;
  justify-content: center;
}
</style>