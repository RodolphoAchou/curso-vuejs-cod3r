<template>
    <div class="calculator">
    <Display :value="displayValue"/>
    <Button label="AC" triple @on-click="clearMemory"/>   
    <Button label="/" operation @on-click="setOperation"/>   
    <Button label="7" @on-click="addDigit"/>   
    <Button label="8" @on-click="addDigit"/>   
    <Button label="9" @on-click="addDigit"/>   
    <Button label="*" operation @on-click="setOperation"/>   
    <Button label="4" @on-click="addDigit"/>   
    <Button label="5" @on-click="addDigit"/>   
    <Button label="6" @on-click="addDigit"/>   
    <Button label="-" operation @on-click="setOperation"/>   
    <Button label="1" @on-click="addDigit"/>   
    <Button label="2" @on-click="addDigit"/>   
    <Button label="3" @on-click="addDigit"/>   
    <Button label="+" operation @on-click="setOperation"/>   
    <Button label="0" double @on-click="addDigit"/>   
    <Button label="." @on-click="addDigit"/>   
    <Button label="=" operation @on-click="setOperation"/>   
    </div>
</template>

<script>
import Button from "../components/Button"
import Display from "../components/Display"

export default {
    data() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0,0],
            current: 0

        }
    },
    components: {
        Button,
        Display
    },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())    
        },
        setOperation(operation) {
           if(this.current === 0){
               this.operation = operation
               this.current = 1
               this.clearDisplay = true
           }else {
               const equals = operation === "="
               const currentOperation = this.operation

               try {
                   this.values[0] = eval(
                       `${this.values[0]} ${currentOperation} ${this.values[1]}`
                   )
               } catch (e) {
                   this.$emit('onError', e)
               }

               this.values[1] = 0
               this.displayValue = this.values[0]
               this.operation = equals ? null : operation
               this.current = equals ? 0 : 1
               this.clearDisplay = !equals
           }
        },
        addDigit(n) {
            if(n === "." && this.displayValue.includes(".")) {
                return
            } 
            const clearDisplay = this.displayValue === "0" || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n
            this.displayValue = displayValue
            this.clearDisplay = false
            this.values[this.current] = this.displayValue
        }
    }

}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>