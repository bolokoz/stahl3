# Introdução

## Flambagem

$$P_{cr} = \frac{\pi E I}{\alpha}$$

### Flambagem Lateral com Torção



## Flexão

$$\rho = \frac{M_x}{a}$$

## Torção

$$\gamma = G \cdot \gamma$$
$$ 

Ãngulo de torção


## Tensão admissível

$$\sigma_{max} \leq \sigma = \frac{f_{yk}}{\gamma}$$

> $\sigma$ = tensão


### Momento de plastificação

$$\Zeta = b_f t_f (d - t_f) + \frac{t_w}{4} (d - 2 t_f)^2$$

```mermaid
graph TD
    A[Flambagem] ==> B[Calcular esbeltez] ==> F[Carga critica];
    C[Raio de giracao x e y];
    D[Momento de inercia x e y];
    E[area da secao $23$];
    C --> B;
    D --> C;
    E --> C;
    G --> F;
```

```mermaid
graph TD
    A[Verificação flexão] ==> B[FLM] ==> C[FLA] ==> D[FLT] ==> F[Usar o menor Md];
    E[esbeltez]-->B & C;
```


```mermaid
graph TD
    A[Verificação flexão] ==> B[FLM] ==> C[FLA] ==> D[FLT] ==> F[Usar o menor Md];
    E[esbeltez]-->B & C;
```
