<template>
    <div class="modal fade" tabindex="-1" ref="modal">
        <div class="modal-dialog">
            <div class="modal-content mt-5">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        @click="toggleVisibility">Close</button>
                    <button type="button" class="btn btn-primary" @click="toggleVisibility">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { Modal } from 'bootstrap'



export default {
    name: 'ModalComp',
    mounted() {
        this.modalInstance = new Modal(this.$refs.modal)
    },
    props: {
        toggleVisibility: {
            type: Function,
            required: true
        }
    },
    methods: {
        showModal() {
            this.modalInstance.show()
        },
        hideModal() {
            if (document.activeElement) {
                document.activeElement.blur()
            }
            this.modalInstance.hide()
        }
    }
}
</script>