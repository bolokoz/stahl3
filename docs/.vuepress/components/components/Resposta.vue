<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="(alternativa,index) in alternativas" :key="index">
      <v-expansion-panel-header>
          {{index + 1}} - 
        {{ alternativa.texto }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
          <p>

        {{ alternativa.resposta }}

        $$ a + 3 \frac{23}{32} $$
          </p>
        <v-img v-for="img in alternativa.imagens" :src="img"></v-img>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: ["alternativas"],
};
</script>

<style>
</style>