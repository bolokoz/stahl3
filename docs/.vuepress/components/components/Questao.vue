<template>
  <v-card

    class="mx-auto my-12"
  >

  <v-card-title>Exercício {{questao.id}}</v-card-title>

    <v-card-text>
      <v-chip-group
      >
        <v-chip v-for="tag in questao.tags"> {{tag}}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-title>{{ questao.questao }}</v-card-title>

    <v-card-text>

      <div>{{questao.texto}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

        <v-img v-for="imagem in questao.imagens"
      height="250"
      :src="imagem"
    ></v-img>

    


    <!-- <v-card-title>{{questao.pergunta}}</v-card-title> -->

        <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["questao"]
}
</script>