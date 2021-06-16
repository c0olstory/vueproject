<template>
  <div :class="[$style.context]" v-if="shown" :style="styles">
    <div
      :class="[$style.context__item]"
      class="py-1"
      v-for="item in items"
      :key="item.text"
      @click="onClick(item)"
    >
      <v-icon
        class="mr-3 py-2"
        small
      >
      {{ item.icon }}
      </v-icon>
      {{ item.text }}
    </div>
    <!-- <div :class="[$style.blockMenu]">
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
    <PaymentForm :itemEdit="objItem" v-if="showForm" :btn="'save'" /> -->
  </div>
</template>

<script>
// import func from 'vue-editor-bridge'
// import { mapMutations } from 'vuex'

// import PaymentForm from '../PaymentForm'

export default {
  data () {
    return {
      items: [],
      shown: false,
      xPos: 0,
      yPos: 0,
      showForm: false,
      item: null
    }
  },
  components: {
    // PaymentForm
  },
  props: {
    objItem: Object
  },
  methods: {
    // ...mapMutations([
    //   'deleteData'
    // ]),
    onClick (item) {
      item.action()
      this.onClose()
    },
    onShow ({ items, caller }) {
      this.shown = true
      this.items = items
      this.setPosition(caller)
      // console.log(this.$el)
      // window.addEventListener('click', event => {
      //   let target = event.target
      //   while (target.parentNode && target.parentNode !== this.this.$el) {
      //     target = target.parentNode
      //   }

      //   if (!target || !target.parentNode) {
      //     this.onClose()
      //   }
      // })
    },
    onClose () {
      this.shown = false
      this.items = []
      // this.showForm = false
    },
    setPosition (caller) {
      const computed = caller.getBoundingClientRect()
      this.xPos = computed.left
      this.yPos = computed.top
    },
    // onCloseForm () {
    //   this.showForm = false
    // },
    // deleteItem () {
    //   this.deleteData(this.objItem.id)
    // },
    onShowForm () {
      this.showForm = true
    }
  },
  computed: {
    styles () {
      return {
        top: `${this.yPos + 30}px`,
        left: `${this.xPos - 40}px`
      }
    }
  },
  mounted () {
    this.$contextMenu.EventBus.$on('show', this.onShow)
    this.$contextMenu.EventBus.$on('close', this.onClose)
    // this.$contextMenu.EventBus.$on('closeForm', this.onCloseForm)
  },
  beforeDestroy () {
    this.$contextMenu.EventBus.$off('show', this.onShow)
    this.$contextMenu.EventBus.$off('close', this.onClose)
    // this.$contextMenu.EventBus.$off('closeForm', this.onCloseForm)
  }
}
</script>

<style lang="scss" module>
.context {
  background-color: #fff;
  box-shadow: 0px 0px 5px 1px;
  position: absolute;
  padding: 5px 0;
  &__item {
    padding: 0px 10px;
    &:hover {
      background-color: #eee;
    }
  }
}
// ul li {
//   list-style: none;
// }
// button {
//   padding: 0;
//   border: none;
//   font: inherit;
//   color: inherit;
//   background-color: transparent;
//   cursor: pointer;
// }
// .blockMenu {
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   &__wrapper {
//     background-color: #fff;
//     box-shadow: 0px 0px 5px 1px
//   }
//   &__link {
//     padding: 10px 0;
//     display: flex;
//     & svg {
//       margin-right: 15px;
//       width: 14px;
//       height: 14px;
//     }
//   }
// }

</style>
