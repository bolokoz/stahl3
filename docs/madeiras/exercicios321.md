# Exercicios

<div v-for="i in items">
    <Questao :questao="i"/>
    <Resposta :alternativas="i.alternativas"/>
</div>

<script>
import data from './exercicios.json'
export default {
  data () {
      return {
          items: data.exercicios
      }
  }
}
</script>