<script lang="ts">
  import Button from "./Button.svelte";
  import Line from "./Line.svelte";
</script>

<div class="calculator">
    <Line>
        <Button triple text="AC" />
        <Button text="X" />
    </Line>
    <Line>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="X" />
    </Line>
    <Line>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" />
    </Line>
    <Line>
        <Button text="3" />
        <Button text="2" />
        <Button text="1" />
        <Button text="+" />
    </Line>
    <Line>
        <Button double text="0" />
        <Button text="," />
        <Button text="=" />
    </Line>
</div>

<style>
    .calculator {
        background-color: var(--back);
        height: 220px;
        width: 150px;
        display: flex;
        flex-direction: column;
    }
</style>