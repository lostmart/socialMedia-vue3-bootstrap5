<template>
    <button class="btn d-flex gap-2 align-items-center" :class="buttonClassName">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: 'ButtonComp',
    props: ['buttonClassName'],
}
</script>
