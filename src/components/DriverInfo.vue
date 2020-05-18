<template>
  <div>
      <h3>DriverInfo</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "DriverInfo",
    methods: {
        ...mapActions(['fetchDriverInfo'])
    },
    computed: mapGetters(['driverInfo']),
    created() {
        //alert('Hello world');
        this.fetchDriverInfo();
    }
}
</script>
<style>

</style>