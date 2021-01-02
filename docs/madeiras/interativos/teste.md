# Teste 

<v-row>
<v-column>
<v-text-field
    label="a"
    hint="Placeholder"
    v-model.number="ex2.a"
></v-text-field>
<v-text-field
    label="b"
    hint="Placeholder"
    v-model.number="ex2.b"
></v-text-field>
<v-text-field
    label="c"
    hint="Placeholder"
    v-model.number="ex2.c"
></v-text-field>
</v-column>
<v-column>
<linegraph :chartData="chart1" :options="options"/>
</v-column>
</v-row>

<script>
export default {
  data: () => ({
    ex2: {a: 10, b: 20, c: 30},
    chartdata: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3]
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
    computed: {
        chart1 () {
            return {
            labels: ['a', 'b', 'c'],
            datasets: [{
                data: [...Object.values(this.ex2)]
                }]
    }
        }
    }
}
</script>