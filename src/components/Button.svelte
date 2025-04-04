<script lang="ts">
    export let text: string = "";
    export let double: boolean = false;
    export let triple: boolean = false;
</script>

<button class="btn" class:triple class:double>
    {text}
</button>

<style>
    .btn {
        flex-basis: 25%;
    }

    .double {
        flex-basis: 50%;
    }
    .triple {
        flex-basis: 75%;
    }
</style>