<template>
  <div>
    <h1>About us</h1>
    <Flicking :options="{ circular: true }">
      <div class="grid-panel">
        1
      </div>
      <frame-grid
        class="container"
        :gap="gap"
        :default-direction="defaultDirection"
        :frame="frame"
        :rect-size="rectSize"
        :use-frame-fill="useFrameFill"
      >
        <div class="item">
          ok
        </div>
        <div class="item">
          2
        </div>
        <div class="item">
          3
        </div>
        <div class="item">
          4
        </div>
        <div class="item">
          5
        </div>
        <div class="item">
          6
        </div>
        <div class="item">
          7
        </div>
        <div class="item">
          8
        </div>
        <div class="item">
          9
        </div>
        <div class="item">
          10
        </div>
      </frame-grid>
      <div class="grid-panel">
        7
      </div>
      <!-- <FrameGrid class="grid-panel">
        <div class="has-background-light has-text-dark ">
          8
        </div>
        <div class="has-background-grey has-text-white">
          9
        </div>
        <div class="has-background-info has-text-white">
          10
        </div>
        <div class="has-background-success has-text-white">
          11
        </div>
        <div class="has-background-warning has-text-dark">
          12
        </div>
        <div class="has-background-danger has-text-white">
          13
        </div>
       </FrameGrid> -->
    </Flicking>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking'
import { FrameGrid } from '@egjs/vue-grid'

export default {
  components: {
    FrameGrid,
    Flicking
  },
  metaInfo: {
    title: 'About us'
  },
  data: () => ({
    gap: 5,
    defaultDirection: 'end',
    frame: [[1, 1, 2, 2], [3, 3, 2, 2], [4, 4, 4, 5]],
    rectSize: 0,
    useFrameFill: true
  })
}
</script>

<style>
html, body {
  position: relative;
  height: 100%;
}

.item {
  position: absolute;
  width: 100px;
  /* border: 1px solid #ccc; */
  color: white;
  text-align: center;
}

.item:nth-child(6n + 1) {
    background-image: url('/img/skewers.webp');
  background-size: cover;
  background-position: center;
    height: 200px;
}

.item:nth-child(6n + 2) {

   background-image: url('/img/ormeat.webp');
  background-size: cover;
  background-position: center;
  height: 300px;
}

.item:nth-child(6n + 3) {
  background: #66e;
  height: 200px;
}

.item:nth-child(6n + 4) {
  background: #4af;
  height: 100px;
}

.item:nth-child(6n + 5) {
  background: #ed5;
  height: 150px;
}
.item:nth-child(6n + 6) {
  background: #d5e;
  height: 130px;
}
</style>
