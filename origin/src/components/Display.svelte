<script lang="ts">
    export let value: string = "";
    export let operation: string = "";

    $: fontSize = value.length > 20 ? 'smallFont' : `s-${value.length}`
</script>

<div class={`display ${fontSize}`}>
    <small>{operation}</small>
    <span>{value}</span>
</div>

<style>
    .display {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 1.7rem;
        background: aliceblue;
        overflow: hidden;
        margin: 2px 1px;
        border-radius: 5px;
    }
    .display small {
        color: #999;
        font-size: 1rem;
    }

    .s-10 { font-size: 1.5rem }
    .s-11 { font-size: 1.35rem; }
    .s-12 { font-size: 1.25rem; }
    .s-13 { font-size: 0.15rem; }
    .s-14 { font-size: 1.0rem; }
    .s-15 { font-size: 0.93rem; }
    .s-16 { font-size: 0.87rem; }
    .s-17 { font-size: 0.83rem; }
    .s-18 { font-size: 0.78rem; }
    .s-19 { font-size: 0.74rem; }
    .smallFont { font-size: 0.6rem; }
</style>