<template>
  <v-card>
    <v-card-title>
      Tabela de espécie de madeiras
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        label="Procurar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      class="elevation-2"
      mobile-breakpoint="0"
      :headers="headers"
      :items="especies"
      :items-per-page="10"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nome',
            align: 'start',

            value: 'Nome',
          },
          { text: 'ρap(kg/m3)', value: 'ρap(kg/m3)' },
          { text: 'fc0(MPa)', value: 'fc0(MPa)' },
          { text: 'ft0(MPa)', value: 'ft0(MPa)' },
          { text: 'fv(MPa)', value: 'fv(MPa)' },
          { text: 'Ec0(MPa)', value: 'Ec0(MPa)' },
        ],
        especies: [
            {"Nome":"Angelim araroba","ρap(kg/m3)":688,"fc0(MPa)":50.5,"ft0(MPa)":69.2,"fv(MPa)":7.1,"Ec0(MPa)":12876},
            {"Nome":"Angelim ferro","ρap(kg/m3)":1170,"fc0(MPa)":79.5,"ft0(MPa)":117.8,"fv(MPa)":11.8,"Ec0(MPa)":20827},
            {"Nome":"Angelim pedra","ρap(kg/m3)":694,"fc0(MPa)":59.8,"ft0(MPa)":75.5,"fv(MPa)":8.8,"Ec0(MPa)":12912},
            {"Nome":"Angelim pedra verdadeiro","ρap(kg/m3)":1170,"fc0(MPa)":76.7,"ft0(MPa)":104.9,"fv(MPa)":11.3,"Ec0(MPa)":16694},
            {"Nome":"Branquilho","ρap(kg/m3)":803,"fc0(MPa)":48.1,"ft0(MPa)":87.9,"fv(MPa)":9.8,"Ec0(MPa)":13481},
            {"Nome":"Cafearana","ρap(kg/m3)":677,"fc0(MPa)":59.1,"ft0(MPa)":79.7,"fv(MPa)":5.9,"Ec0(MPa)":1498},
            {"Nome":"Canafístula","ρap(kg/m3)":871,"fc0(MPa)":52,"ft0(MPa)":84.9,"fv(MPa)":11.1,"Ec0(MPa)":14613},
            {"Nome":"Casca grossa","ρap(kg/m3)":801,"fc0(MPa)":56,"ft0(MPa)":120.2,"fv(MPa)":8.2,"Ec0(MPa)":16224},
            {"Nome":"Castelo","ρap(kg/m3)":759,"fc0(MPa)":54.8,"ft0(MPa)":99.5,"fv(MPa)":12.8,"Ec0(MPa)":11105},
            {"Nome":"Cedro amargo","ρap(kg/m3)":504,"fc0(MPa)":39,"ft0(MPa)":58.1,"fv(MPa)":6.1,"Ec0(MPa)":9839},
            {"Nome":"Cedro doce","ρap(kg/m3)":500,"fc0(MPa)":31.5,"ft0(MPa)":71.4,"fv(MPa)":5.6,"Ec0(MPa)":858},
            {"Nome":"Champagne","ρap(kg/m3)":1090,"fc0(MPa)":93.2,"ft0(MPa)":133.5,"fv(MPa)":10.7,"Ec0(MPa)":232},
            {"Nome":"Cupiúba","ρap(kg/m3)":838,"fc0(MPa)":54.4,"ft0(MPa)":62.1,"fv(MPa)":10.4,"Ec0(MPa)":13627},
            {"Nome":"Catiúba","ρap(kg/m3)":1221,"fc0(MPa)":83.8,"ft0(MPa)":86.2,"fv(MPa)":11.1,"Ec0(MPa)":19426},
            {"Nome":"E.Alba","ρap(kg/m3)":705,"fc0(MPa)":47.3,"ft0(MPa)":69.4,"fv(MPa)":9.5,"Ec0(MPa)":13409},
            {"Nome":"E.Camaldulensis","ρap(kg/m3)":899,"fc0(MPa)":48,"ft0(MPa)":78.1,"fv(MPa)":9,"Ec0(MPa)":13286},
            {"Nome":"E.Citriodora","ρap(kg/m3)":999,"fc0(MPa)":62,"ft0(MPa)":123.6,"fv(MPa)":10.7,"Ec0(MPa)":18421},
            {"Nome":"E.Cloeziana","ρap(kg/m3)":822,"fc0(MPa)":51.8,"ft0(MPa)":90.8,"fv(MPa)":10.5,"Ec0(MPa)":13963},
            {"Nome":"E.Dunnii","ρap(kg/m3)":690,"fc0(MPa)":48.9,"ft0(MPa)":139.2,"fv(MPa)":9.8,"Ec0(MPa)":1829},
            {"Nome":"E.Grandis","ρap(kg/m3)":640,"fc0(MPa)":40.3,"ft0(MPa)":70.2,"fv(MPa)":7,"Ec0(MPa)":12813},
            {"Nome":"E.Maculata","ρap(kg/m3)":931,"fc0(MPa)":63.5,"ft0(MPa)":115.6,"fv(MPa)":10.6,"Ec0(MPa)":1899},
            {"Nome":"E.Maidene","ρap(kg/m3)":924,"fc0(MPa)":48.3,"ft0(MPa)":83.7,"fv(MPa)":10.3,"Ec0(MPa)":14431},
            {"Nome":"E.Microcorys","ρap(kg/m3)":929,"fc0(MPa)":54.9,"ft0(MPa)":118.6,"fv(MPa)":10.3,"Ec0(MPa)":16782},
            {"Nome":"E.Paniculata","ρap(kg/m3)":1087,"fc0(MPa)":72.7,"ft0(MPa)":147.4,"fv(MPa)":12.4,"Ec0(MPa)":19881},
            {"Nome":"E.Propinqua","ρap(kg/m3)":952,"fc0(MPa)":51.6,"ft0(MPa)":89.1,"fv(MPa)":9.7,"Ec0(MPa)":15561},
            {"Nome":"E.Punctata","ρap(kg/m3)":948,"fc0(MPa)":78.5,"ft0(MPa)":125.6,"fv(MPa)":12.9,"Ec0(MPa)":19360},
            {"Nome":"E.Saligna","ρap(kg/m3)":731,"fc0(MPa)":46.8,"ft0(MPa)":95.5,"fv(MPa)":8.2,"Ec0(MPa)":14933},
            {"Nome":"E.Tereticornis","ρap(kg/m3)":899,"fc0(MPa)":57.7,"ft0(MPa)":115.9,"fv(MPa)":9.7,"Ec0(MPa)":17198},
            {"Nome":"E.Triantha","ρap(kg/m3)":755,"fc0(MPa)":53.9,"ft0(MPa)":100.9,"fv(MPa)":9.2,"Ec0(MPa)":14617},
            {"Nome":"E.Umbra","ρap(kg/m3)":889,"fc0(MPa)":42.7,"ft0(MPa)":90.4,"fv(MPa)":9.4,"Ec0(MPa)":14577},
            {"Nome":"E.Urophylla","ρap(kg/m3)":739,"fc0(MPa)":46,"ft0(MPa)":85.1,"fv(MPa)":8.3,"Ec0(MPa)":13166},
            {"Nome":"GarapaRoraima","ρap(kg/m3)":892,"fc0(MPa)":78.4,"ft0(MPa)":108,"fv(MPa)":11.9,"Ec0(MPa)":18359},
            {"Nome":"Guaiçara","ρap(kg/m3)":825,"fc0(MPa)":71.4,"ft0(MPa)":115.6,"fv(MPa)":12.5,"Ec0(MPa)":14624},
            {"Nome":"Guarucaia","ρap(kg/m3)":919,"fc0(MPa)":62.4,"ft0(MPa)":70.9,"fv(MPa)":15.5,"Ec0(MPa)":17212},
            {"Nome":"Ipê","ρap(kg/m3)":1068,"fc0(MPa)":76,"ft0(MPa)":96.8,"fv(MPa)":13.1,"Ec0(MPa)":1811},
            {"Nome":"Jatobá","ρap(kg/m3)":1074,"fc0(MPa)":93.3,"ft0(MPa)":157.5,"fv(MPa)":15.7,"Ec0(MPa)":23607},
            {"Nome":"Louropreto","ρap(kg/m3)":684,"fc0(MPa)":56.5,"ft0(MPa)":111.9,"fv(MPa)":9,"Ec0(MPa)":14185},
            {"Nome":"Maçaranduba","ρap(kg/m3)":1143,"fc0(MPa)":82.9,"ft0(MPa)":138.5,"fv(MPa)":14.9,"Ec0(MPa)":22733},
            {"Nome":"Oiticica amarela","ρap(kg/m3)":756,"fc0(MPa)":69.9,"ft0(MPa)":82.5,"fv(MPa)":10.6,"Ec0(MPa)":14719},
            {"Nome":"Quarubarana","ρap(kg/m3)":544,"fc0(MPa)":37.8,"ft0(MPa)":58.1,"fv(MPa)":5.8,"Ec0(MPa)":967},
            {"Nome":"Sucupira","ρap(kg/m3)":1106,"fc0(MPa)":95.2,"ft0(MPa)":123.4,"fv(MPa)":11.8,"Ec0(MPa)":21724},
            {"Nome":"Tatajuba","ρap(kg/m3)":940,"fc0(MPa)":79.5,"ft0(MPa)":78.8,"fv(MPa)":12.2,"Ec0(MPa)":21724},
            {"Nome":"Pinho do Paraná","ρap(kg/m3)":580,"fc0(MPa)":40.9,"ft0(MPa)":93.1,"fv(MPa)":8.8,"Ec0(MPa)":15225},
            {"Nome":"Pinus caribea","ρap(kg/m3)":579,"fc0(MPa)":35.4,"ft0(MPa)":64.8,"fv(MPa)":7.8,"Ec0(MPa)":8431},
            {"Nome":"Pinus bahamensis","ρap(kg/m3)":537,"fc0(MPa)":32.6,"ft0(MPa)":52.7,"fv(MPa)":6.8,"Ec0(MPa)":7110},
            {"Nome":"Pinus hondurensis","ρap(kg/m3)":535,"fc0(MPa)":42.3,"ft0(MPa)":50.3,"fv(MPa)":7.8,"Ec0(MPa)":9868},
            {"Nome":"Pinus elliottii","ρap(kg/m3)":560,"fc0(MPa)":40.4,"ft0(MPa)":66,"fv(MPa)":7.4,"Ec0(MPa)":11889},
            {"Nome":"Pinus oocarpa","ρap(kg/m3)":538,"fc0(MPa)":43.6,"ft0(MPa)":60.9,"fv(MPa)":8,"Ec0(MPa)":10904},
            {"Nome":"Pinus Taeda","ρap(kg/m3)":645,"fc0(MPa)":44.4,"ft0(MPa)":82.8,"fv(MPa)":7.7,"Ec0(MPa)":13304},
            {"Nome":"Pinho do Paraná","ρap(kg/m3)":580,"fc0(MPa)":40.9,"ft0(MPa)":93.1,"fv(MPa)":8.8,"Ec0(MPa)":15225},
            {"Nome":"Pinus caribea","ρap(kg/m3)":579,"fc0(MPa)":35.4,"ft0(MPa)":64.8,"fv(MPa)":7.8,"Ec0(MPa)":8431},
            {"Nome":"Pinus bahamensis","ρap(kg/m3)":537,"fc0(MPa)":32.6,"ft0(MPa)":52.7,"fv(MPa)":6.8,"Ec0(MPa)":7110}
        ]
      }
    }
  }
  </script>