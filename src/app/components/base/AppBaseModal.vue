<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-container">
          <div class="flex items-center justify-center">
            <v-icon name="bi-check-circle" scale="8" />
          </div>

          <div class="py-5 flex items-center justify-center">
            <p>{{ description }}</p>
          </div>

          <AppBaseButton name="Close" @on-click="emit('onClose')" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface IProps {
  show: boolean
  description: string
}

withDefaults(defineProps<IProps>(), {
  show: false,
  description: 'description'
})

const emit = defineEmits(['onClose'])
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 400px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
