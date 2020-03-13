<template>
    <div>
        <h1>Dados do login</h1>
        <h4>Email: {{getLoginData.email}}</h4>
        <h4>Password: *********</h4>
        <h4>Tipo de usuário: {{getLoginData.userType}}</h4>
    </div>
</template>

<script>
export default {
    name: "teste",
    computed: {
        getLoginData() {
            return this.$store.getters.getLoginData;
        }
    }
};
</script>
<style>
</style>