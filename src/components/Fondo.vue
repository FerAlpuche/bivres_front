<template>
  <particles-bg type="custom" :config="config" :bg="true" />
</template>

<script>
import icon from "../util/icon";
import { ParticlesBg } from "particles-bg-vue";

export default {
  data() {
    return {
      config: {
        num: [2, 7],
        rps: 1.0,
        radius: [20, 40],
        life: [5, 7],
        v: [2, 3],
        tha: [-30, 50],
        alpha: [0.6, 0],
        scale: [1.0, 2.3],
        body: icon,
        position: "all",
        cross: "dead",
        random: 15,
      },
    };
  },
  components: {
    ParticlesBg,
  },
};
</script>
