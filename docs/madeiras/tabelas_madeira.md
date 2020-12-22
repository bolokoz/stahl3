# Tabelas rápidas de madeira

## Relações entre resistência para caracterização simplificada

|                 |                 |                 |                 |                 | Conífera        | Dicotiledônea   |
|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| $f_{c0}/f_{t0}$ | $f_{tm}/f_{t0}$ | $f_{c90}/f_{c0}$ | $f_{e0}/f_{t0}$ | $f_{e90}/f_{c0}$ | $f_{v0}/f_{c}$ | $f_{v0}/f_{c0}$ |
| 0.77            | 1               | 0.25            | 1               | 0.25            | 0.15            | 0.12            |

## Espécies de madeiras

>- $p_{ap} =$ densidade aparente (umidade padrão = 12%)
>- $f_{c0} =$ resistencia compressão paralela às fibras
>- $f_{t0} =$ resistencia tração paralela às fibras
>- $f_v =$ resistencia ao cisalhamento
>- $E_{c0} =$ módulo de elasticidade na compressão paralelo às fibras

<template>
  <tabelamadeira />
</template>

## Classes de resistências

### Coníferas

| Classes | fc0 (MPa) | fv (MPa) | Eco  (MPa)  | Pbas (kg/m3) | Pap (kg/m3) |
|---------|-----|----|-------|------|-----|
| C20     | 20  | 4  | 3500  | 400  | 500 |
| C25     | 25  | 5  | 8500  | 450  | 550 |
| C30     | 30  | 6  | 14500 | 500  | 600 |

### Dicotiledôneas

| Classes | fc0 (MPa)  | fv (MPa) | Eco  (MPa)  | Pbas (kg/m3) | Pap (kg/m3) |
|---------|-----|----|-------|------|-----|
| C20     | 20  | 4  | 9500  | 500  | 650 |
| C30     | 30  | 5  | 14500  | 650  | 800 |
| C40     | 40  | 6  | 19500 | 750  | 950 |
| C60     | 60  | 8  | 24500 | 800  | 1000 |

## Combinações de cargas

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
        ],
      }
    },
  }
</script>