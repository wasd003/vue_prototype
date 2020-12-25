<template>
    <div class="root">
        <div class="menu-wrapper">
            <el-menu :default-active="1"
                    class="top-menu"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="1" @click="goToNeo4j">neo4j</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">RDBMS</template>
                    <el-menu-item index="2-1" @click="goToNonDim">范式化建模</el-menu-item>
                    <el-menu-item index="2-2" @click="goToDim">维度建模</el-menu-item>
                </el-submenu>
                <el-menu-item index="3" @click="goToHadoop">hadoop</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavHeader",
        methods: {
            goToNeo4j() {this.$router.push('/neo4j');},
            goToHadoop() {this.$router.push('/hadoop');},
            goToNonDim() {this.$router.push('/rdbms/nondim');},
            goToDim() {this.$router.push('/rdbms/dim');}
        },
        mounted() {

        },
        data() {
            return {

            }
        }
    }
</script>

<style scope>
    .menu-wrapper {
        display: flex;
        justify-content: center;
    }
    .top-menu {
        width: 1120px;
        display: flex;
        justify-content: space-between;
        border-radius: 30px;
    }
</style>
