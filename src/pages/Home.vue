<template>
    <div>
        <NavHeader></NavHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavHeader from "@/components/NavHeader";

    export default {
        name: 'Home',
        components: {
            NavHeader
        }
    }
</script>

<style scoped>

</style>
