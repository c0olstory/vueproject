<template>
  <div class="calculator">
    <input class="calculator__input" v-model.number="operand1">
    <input class="calculator__input" v-model.number="operand2">
    = {{ result }}

    <div class="calculator__operations">
      <button class="calculator__button-op btn"
        v-for="op in operations"
        :key="op"
        @click="calculate(op)"
      >{{ op }}</button>
    </div>

    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Отобразить экранную клавиатуру</label>

    <div class="calculator__buttons" v-if="checked === true">
      <button class="calculator__button-btn btn"
        v-for="btn in buttons"
        :key="btn"
        @click="numberInput(btn)"
      >{{ btn }}</button>
    </div>

    <br>
    <input type="radio" id="one" value="1" v-model="picked">
    <label for="one">Operand-1</label>
    <input type="radio" id="two" value="2" v-model="picked">
    <label for="two">Operand-2</label>

  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    checked: true,
    picked: '1',
    operations: ['+', '-', '/', '*', '**'],
    buttons: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'delete']
  }),
  props: {
  },
  methods: {
    calculate (op) {
      const { operand1, operand2 } = this

      const calcOperations = {
        '+': () => operand1 + operand2,
        '-': () => operand1 - operand2,
        '/': () => operand1 / operand2,
        '*': () => operand1 * operand2,
        '**': () => operand1 ** operand2
      }
      this.result = calcOperations[op]()
    },
    numberInput (btn) {
      if (this.picked === '1') {
        if (btn === 'delete') {
          this.operand1 = String(this.operand1)
          this.operand1 = this.operand1.substr(0, this.operand1.length - 1)
          this.operand1 = Number(this.operand1)
        } else {
          this.operand1 = Number(this.operand1 + btn)
        }
      } else {
        if (btn === 'delete') {
          this.operand2 = String(this.operand2)
          this.operand2 = this.operand2.substr(0, this.operand2.length - 1)
          this.operand2 = Number(this.operand2)
        } else {
          this.operand2 = Number(this.operand2 + btn)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.calculator {
  // display: flex;
  // flex-direction: column;
  // max-width: 200px;
  &__input {
    padding: 5px;
    font-size: 16px;
    width: 80px;
    margin: 3px;
  }
  &__operations {
    display: flex;
    justify-content: center;
    margin: 15px 0 0 0;
  }
  &__buttons {
    display: flex;
    justify-content: center;
    max-width: 125px;
    flex-wrap: wrap;
    margin: 15px auto;
  }
  &__button-btn {
    flex-wrap: wrap;
    &:last-child {
      flex: 0 1 100%;
      order: 1
    }
    &:first-child {
      order: 1;
    }
  }
}
.btn {
  padding: 5px 10px;
  margin: 5px 5px;
}
</style>
