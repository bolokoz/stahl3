# Tabelas rápidas de madeira

## Relações entre resistência

Relações entre resistência para caracterização simplificada

|                 |                 |                 |                 |                 | Conífera        | Dicotiledônea   |
|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| $f_{c0}/f_{t0}$ | $f_{tm}/f_{t0}$ | $f_{c90}/f_{c0}$ | $f_{e0}/f_{t0}$ | $f_{e90}/f_{c0}$ | $f_{v0}/f_{c}$ | $f_{v0}/f_{c0}$ |
| 0.77            | 1               | 0.25            | 1               | 0.25            | 0.15            | 0.12            |

## Espécies

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


## KMOD

### Kmod 1

Refere-se à duração do carregamento

|               | Madeira serrada, laminada colada, compensada | Madeira recomposta |
|---------------|:----------------------------------------------:|:--------------------:|
| Permanente    | 0.6                                          | 0.3                |
| Longa Duração | 0.7                                          | 0.45               |
| Média Duração (< 6 meses)| 0.8                                          | 0.65               |
| Curta Duração (< 1 semana)| 0.9                                          | 9.9                |
| Instantânea   | 1.1                                          | 1.1                |


### Kmod 2

Refere-se à classe de umidade do local

|               | Madeira serrada, laminada colada, compensada | Madeira recomposta | Madeira serrada submersa |
|---------------|:----------------------------------------------:|:--------------------:|:--------------------------:|
| Classes 1 e 2         | 1                                            | 1                  | 0.65                     |
| Classes 3 e 4         | 0.8                                          | 0.9                | 0.65                     |

### Kmod 3

Refere-se ao tipo de madeira

| Conífera                     |      0.8      |
|------------------------------|:-------------:|
| Dicotiledônea 1ª categoria   |       1       |
| Dicotiledônea 2ª categoria   |      0.8      |
| Madeira laminada colada reta |       1       |
| Madeira laminada curva       | 1 - 2000(t/r) |

## Combinação de cargas

$$F_d = \sum \gamma_g F_{gi,k} + \gamma_Q [ F_{Qi,k} + \sum \Psi_{0j} F_{Qj,k}]$$

### Combinação com duas cargas acidentais de naturezas diferentes

Verificar dois casos:

O primeiro caso com efeitos dinâmicos como ação variável principal

$$F_d = \sum \gamma_g F_{gi,k} + \gamma_Q [ Q_{k} + \Psi_{0j} W_{k}]$$


O segundo caso com vento como ação variável principal:

$$F_d = \sum \gamma_g G_{i,k} + \gamma_Q [ 0.75 W_{k} + \Psi_{0Q} Q_{k}]$$

>- $\gamma_g$ fator de ponderação para ações permanentes 
>- $\gamma_Q$ fator de ponderação para ação variável principal
>- $W_Q$ ação variável do vento (wind)
>- $\Psi_0$ para ações variáveis de média duração (1 semana a 6 meses)
>- $\Psi_1$ para ações variáveis de média duração (1 semana a 6 meses)
>- $\Psi_2$ para ações variáveis de longa duração (> 6 meses)

### Coeficientes minoração ELU

$$\gamma_{wc} = 1.4$$
$$\gamma_{wt} = 1.8$$
$$\gamma_{wv} = 1.8$$

### Coeficiente minoração ELS

$$\gamma_{w} = 1$$

### Resistência caracteristica

Normalmente adota-se 0.7, mas pode ser obtido através de ensaio de corpo de prova 

$$f_{k} = 0.7f$$

### Coeficiente para ação permamente ($\gamma_g$)

#### Pequena variabilidade

| Combinações         | Desfavorável | Favorável        |
|--------------------------------------------|--------------|-----------------|
| Normais                 | 1.3          | 1               |
| Especiais ou construção | 1.2          | 1               |
| Excepcionais            | 1.1        | 1               |

#### Grande variabilidade

| Combinações         | Desfavorável | Favorável        |
|--------------------------------------------|--------------|-----------------|
| Normais                 | 1.4          | 0.9               |
| Especiais ou construção | 1.3          | 0.9               |
| Excepcionais            | 1.2        | 0.9               |




### Coeficiente carga variável principal ($\gamma_q$)

| Combinações variáveis          | Ações variáveis ou acidentais $\gamma_Q$ | Efeitos temperatudra $\gamma_\epsilon$        |
|--------------------------------------------|--------------|-----------------|
| Normais  | 1.4          | 1.2               |
| Especiais ou construção           | 1.2          | 1               |
| Excepcionais           | 1          | 0               |


### Fator de ponderação carga variável secundária
#### Ações correntes

| Ações                    | $\Psi_0$ | $\Psi_1$  | $\Psi_2$  |
|--------------------------|------------|-----|-----|
| Variação de temperatura  | 0.6        | 0.5 | 0.3 |
| Pressão dinâmica vento   | 0.5        | 0.2 | 0   |

#### Cargas Acidentais

| Ações                    | $\Psi_0$ | $\Psi_1$  | $\Psi_2$  |
|--------------------------|------------|-----|-----|
| Locais sem predominância de pesos ou concentrações de pessoas  | 0.4        | 0.3 | 0.2 |
| Locais com predominância de pesos fixos ou pessoas  | 0.7        | 0.6 | 0.4 |
| Bibliotecas, arquivos, oficinas e garagens  | 0.8        | 0.7 | 0.6 |


#### Cargas Móveis

| Ações                    | $\Psi_0$| $\Psi_1$  | $\Psi_2$  |
|--------------------------|------------|-----|-----|
| Pontes de pedestres  | 0.4        | 0.3 | 0.2 |
| Pontes rodoviárias   | 0.6        | 0.4 | 0.2   |
| Pontes ferroviárias   | 0.8        | 0.6 | 0.4   |



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