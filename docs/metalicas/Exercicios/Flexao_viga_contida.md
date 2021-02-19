# Flexão em viga CSV 400x82

Verificar se a viga suporta o carregamento. Considere aço MR-250 e existem travamentos transvesais nos pontos de aplicação das cargas concentradas. Atribua um perfil W (laminado de abas paralelas) equivalente

## 

1. Detemrinar o diagrama do momento fletor

:::tip Combinação de cargas
$$M_{sd} = (\gamma_g * \frac{g * l^2}{8}) + (\gamma_q * \frac{q * l^2}{8})$$
:::

{{q}}

2. Determinar propriedades do perfil CSV

d = 400 
h = 375
A = 105
Ix = 31680

3. Caluclar momento plástico

4. Verificar flambagens
    1. FLM (Flambagem Local da Mesa)

        1. Determinar $\lambda_p$ e $\lambda_r$ e verificar qual o $\lambda_b$. 
    
        Como $\lambda_r \leq \lambda_b \leq \lambda_r$ a esbeltez é semi-compacta.

        2. Encontrar momento resistente 

    

    - FLA

    asdasdlakjds

    - FLT

    asdfasdfsa
5. Pegar o menor momento resistente de todos **minorar** e comparar com o $M_d$ majorado.

6. Verificar flecha

7. Verificar cortante

$$\delta_{max} = \frac{5qL^4}{384EI}$$

<script>

export default {
  data () {
      return {
        q: 10,
        g: 2,
        l: 8,
        gamma_g: 1.4,
        gamma_q: 1.5
      }
  },
  computed: {
    da () {
      return (this.ma / this.va).toFixed(5)    },
    db () {
      return (this.mb / this.vb).toFixed(5)
    }
  }
}
</script>
