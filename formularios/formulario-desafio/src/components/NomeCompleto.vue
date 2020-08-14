<template>
    <div class="rotulo">
        <label>Nome Completo:</label>
        <div class="elemento">
            <p>Rodolpho Achou A</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .rotulo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 15px 0px;
        font-size: 1.4rem;
    }

    .elemento {
        display: flex;
        align-self: stretch;
        margin: 10px 0px;
    }
</style>