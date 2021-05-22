<template>
  <div :class="[$style.pagination]">
    <button :class="[$style.pagination__btn, $style.arrow]" @click="showPreviousPage">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="black" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
    </button>
    <button :class="[{ active: page === activePage }, $style.pagination__btn]" v-for="page in getPaginationList" :key="page" @click="showPageOnClick(page)">{{ page }}</button>
    <button :class="[$style.pagination__btn, $style.arrow]" @click="showNextPage">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="black" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      activePage: 1
    }
  },
  methods: {
    ...mapMutations([
      'selectedPage',
      'previousPage',
      'nextPage'
    ]),
    showPageOnClick (page) {
      this.activePage = page
      console.log(this.activePage)
      this.selectedPage(page)
    },
    showPreviousPage () {
      if (this.activePage > 1) {
        this.activePage = this.activePage - 1
        console.log(this.activePage)
        this.previousPage(this.activePage)
      }
    },
    showNextPage () {
      if (this.activePage !== this.$store.state.pagination.length) { // можно ли как-то по другому сделать тут?
        this.activePage = this.activePage + 1
        console.log(this.activePage)
        this.nextPage(this.activePage)
      }
    }
  },
  computed: {
    ...mapGetters([
      'getPaginationList'
    ])
  }
}
</script>

<style lang="scss" module>
// !не получилось сделать активные классы модульными, подскажите как сделать
.pagination {
    box-shadow: 0px 0px 5px 1px rgb(173, 173, 173);
    padding: 5px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  &__btn {
    font-size: 18px;
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: all .5s ease;
    background: none;
    margin-left: 8px;
    margin-right: 8px;
    font-weight: bold;
    &:hover {
      color: #84c8ea;
    }
  }
  &__btn svg {
    width: 14px;
    height: 14px;
    // &:hover path {
    //   fill: #84c8ea;
    //   transition: all .5s ease;
    //   transform: scale(1.1);
    // }
  }
  &__btn:last-child svg {
    transform: rotate(180deg);
  }
}
.active {
  color: #84c8ea;
}
.arrow svg {
  &:hover {
    & path {
      fill: #84c8ea;
      transition: all .5s ease;
    }
  }
}
</style>
