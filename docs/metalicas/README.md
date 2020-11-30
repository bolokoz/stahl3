# Metálicas 

:::tip Vantagens
- Precisão milimétrica
- Garantia das dimensões e propriedades do material
- Obras mais rápidas e limpas
- Possibilita desmontagem
- Estruturas leves com grandes vãos
:::

:::danger Desvantagens
- Logística (transporte) até a obra
- Mão de obra qualificada
- Limitação do fornecimento de perfis
- Necessidade tratamento corrosão
- Necessidade tratamento contra fogo
:::


## Fluxograma flexão

```mermaid
graph TB
    1[Cálculo de viga metálica Flexão]
    2[Determinar diagrama momento fletor]
    3[Determinar propriedades geométricas do perfil]
    4[Cálculo do momento plástico]
    5[Verificar flambagens]
    6[Determinar momento resistente]
    7[Verificar flecha]
    8[Verificar cortante]


    subgraph TB
    51[FLM]
    52[FLA]
    53[FLT]
    5 -.-> 51 -.-> 52 -.-> 53 -.-> 6
    end

    click 2 "../analise_estrutural/carregamentos"
    click 3 "./perfis"
    click 4 "./#momento-plastico"
    click 5 "./#flambagem"
    click 51 "./#flm"
    click 52 "./#fla"
    click 53 "./#flt"
    click 7 "./#flecha"
    click 8 "./#cortante"

    1 ==> 2 ==> 3 ==> 4 ==> 5 ==> 6 ==> 7 ==> 8
```

## Momento plástico

## Flambagem

### FLM

Flambagem Local da Mesa

Fórmulas para cálculo generalizados.
Para aços usuais pode-se usar os valores do [fluxograma FLM](#fluxograma-flm)

:::tip
1. Determinar esbeltez da mesa
2. Comparar esbeltez com valores limites
3. Encontrar o momento resistente
:::

#### Esbeltez da mesa

$$\lambda_b = \frac{b_f}{2t_f}$$
$$\lambda_p = 0,38 \sqrt{\frac{E}{f_y}}$$
$$\lambda_f = C \sqrt{\frac{E}{0,7 {f_y}/{k_c} }}$$

>- $\lambda_b$ = esbeltez da mesa
>- $b_f$ = (beam flange?) largura da mesa
>- $t_f$ = (thickness flange?) espessura da mesa
>- $C$ =  0,83 para laminados e 0,95 para soldados

Ao comparar o $\lambda_b$ com os valores limites, categorizar a mesa como **compacta, semicompacta ou esbelta**

##### FLM compacta

Caso $\lambda_b < \lambda_p$:
$$M_n = M_{pl}$$

##### FLM semicompacta

Caso $\lambda_p < \lambda_b < \lambda_r$:
$$M_n = M_{pl}$$

##### FLM esbelta

Caso $\lambda_b > \lambda_r$:
$$M_n = M_{pl}$$

#### Fluxograma FLM
```mermaid
graph TD
    i[Valores limites vigas I ou H fletidas no plano da alma]
    A{Aço MR250?}
    B{Aço AR350?}
    E{MR250 Laminado?}
    C[lambda p = 10,7]
    C2[lambda r = 24]
    C-->E
    F[lambda r = 28]
    F2[lambda p = 9,1]
    1[Clique para fórmula geral]
    J{AR350 Laminado?}
    
    i --> A
    A --> |Sim| C
    A --> |Não| B
    E --> |Sim| F
    E --> |Não| 1
    B --> |Sim| F2
    B --> |Não| 1
    F2 --> J
    J --> |Não| 1
    J --> |Sim| C2

    C2 --> 2
    F --> 2
    1 --> 2

    2{Comparar lambda b com lambda f e lambda r}
    21[Seção compacta]
    22[Seção semicompacta]
    23[Seção esbelta]
    2 --> |lambda B < lambda P| 21
    2 --> |lambda B entre lambda p e lambda r| 22
    2 --> |lambda B > lambda R| 23
    
    21a[Momento nominal = momento plástico]
    22a[Momento interpolado, clique para ver fórmula]
    23a[Momento bem reduzido, clique para ver fórmula]

    21 --> 21a
    22 --> 22a
    23 --> 23a


    click 1 "./#flm"
    click 22a "./#flm-semicompacta"
```

> Fonte: Tabela 6.1 PFEIL


### FLA

Flambagem Local da Alma

### FLT

Flambagem Lateral por Torção

Ocorre em vigas sem contenção lateral ou parcialmente contidas.
Verificar FLT para os trechos das vigas parcialmente contidas.
Dispensa verificação quando contidas lateralmente em todo trecho (vigas de lajes). 

## Flecha

$$flecha$$

## Cortante


$$Cortante$$