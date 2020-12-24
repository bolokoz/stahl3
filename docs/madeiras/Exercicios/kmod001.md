---
tags:
- tipo madeira
- categoria
- resistencia
- compressao
- umidade
titulo: Resistência KMOD 
---

# Resistência KMOD 

<v-chip v-for="tag in $frontmatter.tags"> {{tag}}</v-chip>

> Determinar os valores de cálculo para a resistência à compressão paralela às fibras (fc0,d) e ao cisalhamento (fv,d) para a espécie Eucalipto Citriodora, com base nos resultados fornecidos na Tabela 1, do Anexo E, da NBR 7190/97. Considerar madeira serrada, de segunda categoria, classe de umidade 2 e carregamento de longa duração.

---

Da [tabela de resistência de madeiras](/madeiras/tabelas.html#especies) tem-se:

$$f_{c0} = 62 MPa  \quad f_v = 10,7 MPa$$


:::tip E se não tiver na tabela?
Caso precisar saber resistência perpendicular às fibras, consultar [tabela de relação entre resistências de valores padrão](/madeiras/tabelas.html#relacoes-entre-resistencia)

:::

Pele tabela de resistência de cálculo sabe-se que:

$$f_{c0,k} = 0.7 f_{c0} \quad f_{v0,k} = 0.7 f_v$$

Para cálculo do $K_{mod}$ iremos pegar o valores de KMOD 1 na tabela de duração de cargas, KMOD2 na classe de umidade e KMOD 3 na categoria de madeira. Com isso temos:

$$K_{mod} = K_{mod,1} K_{mod,2} K_{mod,3} = 0.7 * 1 * 0.8 = 0.56$$

Além disso, devemos determinar os coeficientes de segurança conforme a tabela tal:

$$\gamma_{wc} = 1.4 \quad \gamma_{wv} = 1.8$$
Portanto, para determinar resistência à compressão paralelo às fibras $f_{c0,d}$ temos:

$$f_{c0,d} = K_{mod} \frac{f_{c0,k}}{\gamma_{wc}} = 0.56 \frac{43.2}{1.4} = 17.3 MPa$$




