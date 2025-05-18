<template>
    <button class="btn d-flex gap-2 align-items-center" :class="buttonClassName" @click="handleClick">
        <slot></slot>

    </button>
</template>

<script>

export default {
    name: 'ButtonComp',
    props: {
        buttonClassName: String,
        onClick: Function, // This is the function passed as a prop

    },
    methods: {
        handleClick(event) {
            this.onClick()
        }
    }
}
</script>
