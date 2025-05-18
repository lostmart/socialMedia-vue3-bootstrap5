<template>
    <div :class="visible" class="modal fade show" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="toggleVisibility" >Close</button>
                    <button type="button" class="btn btn-primary" @click="toggleVisibility" >Save changes</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'ModalComp',
    props: {
        visible: {
            type: String,
            required: true
        },
        toggleVisibility: {
            type: Function,
            required: true
        }
    }
}
</script>