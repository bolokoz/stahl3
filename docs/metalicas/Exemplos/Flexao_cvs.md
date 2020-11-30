# Flexão em viga CSV 400x82

Verificar se a viga suporta o carregamento. Considere aço MR-250 e existem travamentos transvesais nos pontos de aplicação das cargas concentradas. Atribua um perfil W (laminado de abas paralelas) equivalente

## 

1. Detemrinar o diagrama do momento fletor

$$M_{k} = 188.2 kNm$$

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

<script>
export default {
  data () {
      return {
          va: 10*15*12,
          ma: 2.16,
          vb: 12*11*35,
          mb: 2.5,
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
