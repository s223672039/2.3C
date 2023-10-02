<template>
    <div>
        <!-- Child Component -->
        <h2>Child Component</h2>
        <p>Name: {{ name }}</p>
        <button @click="emitCustomEvent">Emit Custom Event</button>
    </div>
</template>

<script>
export default {
    props: {
        name: String, // Define a prop called "name"
    },
    methods: {
        emitCustomEvent() {
            // Emit a custom event named "custom-event" with some data
            this.$emit('custom-event', 'Custom event data from ChildComponent');
        },
    },
};
</script>


