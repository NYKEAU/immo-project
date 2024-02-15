<template>
    <title>Mentions Légales</title>
    <div>
        <h1>Mentions Légales</h1>
        <p>Insert your legal content here.</p>
        <p>New content legals</p>
        <form @submit.prevent="submitForm">
            <input type="text" name="name" v-model="name" placeholder="Name" />
            <input type="email" name="email" v-model="email" placeholder="Email" />
            <textarea name="message" v-model="message" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </form>
        <div v-if="formSubmitted">
            <p>Form submitted successfully!</p>
        </div>
        <footer />
    </div>
</template>

<script>
export default {
    name: "LegalPage",
    data() {
        return {
            name: '',
            email: '',
            message: '',
            formSubmitted: false,
        };
    },
    methods: {
        submitForm() {
            // Handle form submission here
            // For now, we just set formSubmitted to true
            this.formSubmitted = true;
        },
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
    padding: 20px;
}

p {
    text-align: center;
}
</style>