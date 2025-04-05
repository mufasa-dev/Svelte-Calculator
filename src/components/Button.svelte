<script lang="ts">
    export let text: string = "";
    export let double: boolean = false;
    export let triple: boolean = false;
    export let operation: boolean = false;
    export let highlight: boolean = false;

    export let onClick: (value:string) => void = () => {}
</script>

<button class="btn" 
    on:click={() => onClick(text)}
    class:triple class:double class:operation class:highlight>
    {text}
</button>

<style>
    .btn {
        flex-basis: 25%;
        margin: 0;
        border: 1px solid var(--back);
    }

    .double {
        flex-basis: 50%;
    }
    .triple {
        flex-basis: 75%;
    }

    .operation {
        background-color: orange;
        color: white;
    }

    .highlight {
        background: #b50000;
        color: white;
    }
</style>