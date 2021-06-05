<template>
  <div :class="[$style.wrapper]">
    <!-- <span :class="[$style.icon]">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" class="svg-inline--fa fa-ellipsis-v fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
      </svg>
    </span> -->
    <div :class="[$style.blockMenu]">
      <div :class="[$style.blockMenu__wrapper]">
        <div :class="[$style.blockMenu__link]">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" class="svg-inline--fa fa-pencil-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>
          <button :class="[$style.blockMenu__btn]" @click="onShowForm">Редактировать</button>
        </div>
        <div :class="[$style.blockMenu__link]">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
          <button :class="[$style.blockMenu__btn]" @click="deleteItem">Удалить</button>
        </div>
      </div>
    </div>
    <PaymentForm :itemEdit="objItem" v-if="showForm" :btn="'save'" />
  </div>
</template>

<script>
// import func from 'vue-editor-bridge'
import { mapMutations } from 'vuex'

import PaymentForm from '../PaymentForm'

export default {
  data () {
    return {
      showForm: false,
      item: null
    }
  },
  components: {
    PaymentForm
  },
  props: {
    objItem: Object
  },
  methods: {
    ...mapMutations([
      'deleteData'
    ]),
    onShow ({ name, settings }) {
      console.log(name, settings, 'ser')
      this.item = settings
    },
    onClose () {
      this.showForm = false
    },
    onCloseForm () {
      this.showForm = false
    },
    deleteItem () {
      console.log(this.objItem.id, 'id')
      this.deleteData(this.objItem.id)
    },
    onShowForm () {
      this.showForm = true
      console.log('dfghjkl;')
    }
  },
  mounted () {
    this.$contextMenu.EventBus.$on('showContextMenu', this.onShow)
    this.$contextMenu.EventBus.$on('closeForm', this.onCloseForm)
    this.$contextMenu.EventBus.$on('close', this.onClose)
    // this.$contextMenu.EventBus.$on('showPaymentForm', this.onShowForm)
    // document.addEventListener('click', function(item) {
    //   if (item.target === this.$refs['context_menu']) {
    //   }
    // })
    console.log(this.objItem, 'obj')
  },
  beforeDestroy () {
    this.$contextMenu.EventBus.$off('showContextMenu', this.onShow)
    this.$contextMenu.EventBus.$off('closeForm', this.onCloseForm)
    this.$contextMenu.EventBus.$off('close', this.onClose)
  }
}
</script>

<style lang="scss" module>
ul li {
  list-style: none;
}
button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
.wrapper {
  // background-color: #fff;
  // max-width: 180px;
  // box-shadow: 0px 0px 5px 1px
}
.blockMenu {
  display: flex;
  flex-direction: column;
  padding: 10px;
  // &__list {
  //   display: flex;
  //   flex-direction: column;
  // }
  &__wrapper {
    background-color: #fff;
    // max-width: 180px;
    box-shadow: 0px 0px 5px 1px
  }
  &__link {
    padding: 10px 0;
    display: flex;
    & svg {
      margin-right: 15px;
      width: 14px;
      height: 14px;
    }
  }
  // &__btn {
  //   font-size: 14px;
  // }
}
// .icon {
//   // position: absolute;
//   // right: 5px;
//   height: 21px;
//   cursor: pointer;
//   & svg {
//     width: 10px;
//     height: 20px;
//     &:hover path {
//       transition: all .5s ease;
//       fill:#84c8ea;
//     }
//   }
// }
</style>
