<script lang="ts">
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Line from "./Line.svelte";

  let value = '0';

  function textNumber(number: string) {
    value += number;
  }
</script>

<div class="calculator">
    <Display value={value} />
    <Line>
        <Button highlight triple text="AC" />
        <Button text="/" />
    </Line>
    <Line>
        <Button text="7" onClick={textNumber} />
        <Button text="8" onClick={textNumber} />
        <Button text="9" onClick={textNumber} />
        <Button operation text="x" />
    </Line>
    <Line>
        <Button text="4" onClick={textNumber} />
        <Button text="5" onClick={textNumber} />
        <Button text="6" onClick={textNumber} />
        <Button operation text="-" />
    </Line>
    <Line>
        <Button text="3" onClick={textNumber} />
        <Button text="2" onClick={textNumber} />
        <Button text="1" onClick={textNumber} />
        <Button operation text="+" />
    </Line>
    <Line>
        <Button double text="0" />
        <Button operation text="," />
        <Button highlight text="=" />
    </Line>
</div>

<style>
    .calculator {
        background-color: var(--back);
        height: 220px;
        width: 150px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 10px;
    }
</style>