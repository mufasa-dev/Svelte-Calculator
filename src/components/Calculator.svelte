<script lang="ts">
  import CalculatorModel from "../model/CalculatorModel";
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Line from "./Line.svelte";

  let calc = new CalculatorModel();

  const textNumber = (num: string) => calc = calc.textNumber(num);
  const textOperation = (op: string) => calc = calc.textOperation(op);
  const calculate = () => calc = calc.calculate();
  const addDot = () => calc = calc.addDot();
  const clearScreen = () => calc = calc.clearScreen();

</script>

<div class="calculator">
    <h4 class="title">Calculator</h4>
    <Display value={calc.value} />
    <Line>
        <Button highlight triple text="AC" onClick={clearScreen} />
        <Button operation text="/" onClick={textOperation} />
    </Line>
    <Line>
        <Button text="7" onClick={textNumber} />
        <Button text="8" onClick={textNumber} />
        <Button text="9" onClick={textNumber} />
        <Button operation text="x" onClick={textOperation} />
    </Line>
    <Line>
        <Button text="4" onClick={textNumber} />
        <Button text="5" onClick={textNumber} />
        <Button text="6" onClick={textNumber} />
        <Button operation text="-" onClick={textOperation} />
    </Line>
    <Line>
        <Button text="1" onClick={textNumber} />
        <Button text="2" onClick={textNumber} />
        <Button text="3" onClick={textNumber} />
        <Button operation text="+" onClick={textOperation} />
    </Line>
    <Line>
        <Button double text="0" onClick={textNumber} />
        <Button operation text="," onClick={addDot} />
        <Button highlight text="=" onClick={calculate} />
    </Line>
</div>

<style>
    .calculator {
        background-color: var(--back);
        height: 300px;
        width: 100%;
        max-width: 350px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 10px;
    }
    .title {
        color: white;
        margin: 0;
        margin-bottom: 5px;
        text-align: center;
    }
</style>