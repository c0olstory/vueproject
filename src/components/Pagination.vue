<template>
  <div :class="[$style.pagination]">
    <!-- <button
      :class="[
      $style.pagination__btn, $style.arrow,
      {[$style.disabledButton]: currentPage === 1}
      ]"
      @click="showPageOnClick(currentPage - 1)">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="black" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
    </button> -->
    <!-- <button
      v-for="page in amountPages" :key="page"
      :class="[
      $style.pagination__btn,
      {[$style.active]: currentPage === page}
      ]"
      @click="showPageOnClick(page)"
      >{{ page }}
    </button> -->
    <!-- <router-link :to="{ path: `/dashboard/${page}` }" -->
    <!-- <button
    :class="[
      $style.pagination__btn, $style.arrow,
      {[$style.disabledButton]: currentPage === amountPages}
      ]"
      @click="showPageOnClick(currentPage + 1)"
    >
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="black" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
    </button> -->
    <router-link :to="{ name: 'dashboardPage', params: { page: +this.currentPage - 1 }}"
      :class="[
      $style.pagination__btn, $style.arrow,
      {[$style.disabledButton]: currentPage === 1}
      ]">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="black" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
    </router-link>
    <router-link :to="{ name: 'dashboardPage', params: { page: page }}"
      v-for="page in amountPages" :key="page"
      :class="[
      $style.pagination__btn,
      {[$style.active]: currentPage === page}
      ]"
      >{{ page }}
    </router-link>
    <router-link :to="{ name: 'dashboardPage', params: { page: +this.currentPage + 1 }}"
      :class="[
      $style.pagination__btn, $style.arrow,
      {[$style.disabledButton]: currentPage === amountPages}
      ]">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="black" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </router-link>
  </div>
</template>

<script>

export default {
  props: {
    length: Number,
    amountItems: Number,
    currentPage: Number
  },
  data () {
    return {
    }
  },
  methods: {
    showPageOnClick (page) {
      console.log(page, 'page')
      if (page < 1 || page > this.amountPages) {
        return
      }
      this.$emit('activePage', page)
    }
  },
  computed: {
    amountPages () {
      return Math.ceil(this.length / this.amountItems)
    }
  }
}
</script>

<style lang="scss" module>
a {
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
}
.pagination {
    box-shadow: 0px 0px 5px 1px rgb(173, 173, 173);
    padding: 15px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  &__btn {
    color: #000;
    font-size: 18px;
    padding: 0px;
    border: none;
    cursor: pointer;
    transition: all .5s ease;
    background: none;
    margin-left: 12px;
    margin-right: 12px;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: #84c8ea;
    }
  }
  &__btn svg {
    width: 14px;
    height: 14px;
  }
  &__btn:last-child svg {
    transform: rotate(180deg);
  }
}
.active {
  cursor: default;
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
.disabledButton {
  cursor: default;
  & svg {
    pointer-events:none;
    opacity: 0.2;
  }
}
</style>
