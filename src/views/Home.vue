<script setup>
import nnnnn from "@/assets/nnnnn.jpg"
import korate from "@/assets/korate.png"
import ha from "@/assets/ha.jpg"

import Readme from '@/assets/README.md'
</script>

<template>
    <div class="self-container">
        <div style="grid-column: 1 / span 1;">
            <div class="magic-c" style="display: flex;height: 150px;">
                <img style="height: 100%;max-width: 100%;" :src="ha" alt="">
            </div>
        </div>
        <div style="grid-column: 2 / span 1;">
            <div class="magic-c" style="height: 150px;">
                <img style="height: 100%;max-width: 100%;" :src="nnnnn" alt="">
            </div>
        </div>
        <div style="grid-column: 1 / span 2;">
            <div class="magic-c" style="height: 100%;">
                <img style="width: 100%;" :src="korate" alt="囊囊囊囊囊">
            </div>
        </div>
        <div style="grid-column: 1 / span 2;">
            <div class="magic-c markdown-body" style="height: 100%;">
                <Readme />
            </div>
        </div>

    </div>
</template>
<style scoped>
img {
    object-fit: cover;
}

.self-container {
    width: 100%;
    min-height: 100%;

    padding: 10px 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto 1fr;
    gap: 10px;
}

div.magic-c {
    padding: 1em;
    border-radius: 8px;
    box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.12);
}
</style>