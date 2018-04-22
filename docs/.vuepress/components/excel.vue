<template>
    <table>
        <tr>
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
        </tr>
        <tr>
            <td>1</td>
            <td :class="{ highlight: highlight.includes('a1') }"></td>
            <td :class="{ highlight: highlight.includes('b1') }"></td>
            <td :class="{ highlight: highlight.includes('c1') }"></td>
        </tr>
        <tr>
            <td>2</td>
            <td :class="{ highlight: highlight.includes('a2') }"></td>
            <td :class="{ highlight: highlight.includes('b2') }"></td>
            <td :class="{ highlight: highlight.includes('c2') }"></td>
        </tr>
        <tr>
            <td>3</td>
            <td :class="{ highlight: highlight.includes('a3') }"></td>
            <td :class="{ highlight: highlight.includes('b3') }"></td>
            <td :class="{ highlight: highlight.includes('c3') }"></td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: "excel",
        props: ['highlight']
    }
</script>

<style scoped>
    tr {
        background: none;
    }
    tr:first-child, td:first-child {
        background-color: #f6f8fa;
    }
    tr > td:first-child {
        font-weight: bold;
    }
    .highlight {
        background-color: #ffd730;
    }
</style>