---
layout: default
---

<h1>¡Bienvenidos a mi repositorio sobre los cambios de forma Pokémon!</h1>

![Image](https://github.com/user-attachments/assets/90a6bf1e-c12f-4725-be02-8f9887bde60d)

<input type="text" id="buscador" placeholder="Buscar sección..." onkeyup="buscarSeccion()">
<ul id="lista-secciones">
  <li><a href="#principal">PRINCIPAL</a></li>
  <li><a href="#alola">ALOLA</a></li>
  <li><a href="#galar">GALAR</a></li>
  <li><a href="#hisui">HISUI</a></li>
  <li><a href="#paldea">PALDEA</a></li>
  <li><a href="#convergente">CONVERGENTE</a></li>
  <li><a href="#paradox-pasado">PARADOX PASADO</a></li>
  <li><a href="#paradox-futuro">PARADOX FUTURO</a></li>
  <li><a href="#referencias">REFERENCIAS</a></li>
</ul>

<script>
function buscarSeccion() {
  let input = document.getElementById('buscador').value.toUpperCase();
  let ul = document.getElementById('lista-secciones');
  let li = ul.getElementsByTagName('li');
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let txt = a.textContent || a.innerText;
    li[i].style.display = txt.toUpperCase().indexOf(input) > -1 ? "" : "none";
  }
}
</script>

---

## <a id="principal"></a>PRINCIPAL

En este sitio encontrarás una recopilación completa de los cambios de forma en Pokémon, organizados por región y tipo. Desde las primeras formas regionales introducidas en Alola, hasta las nuevas variantes Paradoja de Pasado y Futuro en Paldea, pasando por formas únicas como las Convergentes y las exclusivas de Hisui y Galar.

Cada sección te llevará a una categoría específica, explicando los Pokémon que cambian su tipo, forma, habilidad o incluso su historia en el lore. También incluimos una sección de Referencias con las fuentes consultadas para asegurar la precisión del contenido.

---

## <a id="alola"></a>☀️ALOLA

Las Formas de Alola son variantes de Pokémon que han evolucionado en la región tropical de Alola, adaptándose a su clima cálido y su ecosistema insular. Estas formas introdujeron cambios en tipos, habilidades y apariencia en comparación con sus contrapartes de otras regiones. Se caracterizan por sus adaptaciones a climas cálidos y entornos volcánicos, con nuevas combinaciones de tipos, habilidades ajustadas a su entorno y diseños inspirados en la mitología hawaiana.

## 🏝️ Ejemplos de Formas de Alola  

### 🦊 **Vulpix y Ninetales de Alola**  

![Image](https://github.com/user-attachments/assets/b7cfcdd8-8ec1-47f5-b6a6-4da80a46bc1c)

- **Tipo:** Hielo (Vulpix) / Hielo / Hada (Ninetales)  
- **Diferencia:** Adaptados a las montañas nevadas, cambiaron su tipo de Fuego a Hielo.  
- **Habilidad especial:** Manto Níveo (aumenta evasión en tormentas de nieve). 

### 🦎 **Exeggutor de Alola**  

![Image](https://github.com/user-attachments/assets/31c3fb04-45cf-40a1-91f6-725a8a95d35b)

- **Tipo:** Planta / Dragón  
- **Diferencia:** Su cuello se alargó drásticamente y es su forma real según los habitantes de Alola.  
- **Habilidad especial:** Cosecha (posibilidad de reutilizar Baya consumida).

### 🦔❄️ Sandshrew y Sandslash de Alola  

![Image](https://github.com/user-attachments/assets/7580a2ba-0195-4555-94fc-edc3e4d16321)

- **Tipo:** Hielo / Acero  
- **Diferencia:** Su caparazón se endureció y se adaptaron a climas fríos.  
- **Habilidad especial:** Manto Níveo o Ímpetu Nevado (aumenta velocidad en tormentas de nieve).

### 🦨🐀 Rattata y Raticate de Alola 

![Image](https://github.com/user-attachments/assets/7c2d97ff-cffb-4334-8d07-095cda57de01)

- **Tipo:** Siniestro / Normal  
- **Diferencia:** Se volvieron nocturnos y viven en ciudades, cazando en grupos organizados.  
- **Habilidad especial:** Gula o Entusiasmo (aumenta ataque pero baja precisión).

### 🛢️💀 Grimer y Muk de Alola  

![Image](https://github.com/user-attachments/assets/027fa080-963f-4d9e-b536-1921848a8f97)

- **Tipo:** Veneno / Siniestro  
- **Diferencia:** Se alimentan de basura, lo que les dio su color verdoso y un brillo tóxico.  
- **Habilidad especial:** Toque Tóxico o Hedor (pueden envenenar al contacto o repeler Pokémon).

### 😼💎 Meowth y Persian de Alola 

![Image](https://github.com/user-attachments/assets/57a4d055-27c3-44d4-a6b0-7b8044069b5a)

- **Tipo:** Siniestro  
- **Diferencia:** Fueron criados por la realeza de Alola, lo que les dio un aire arrogante.  
- **Habilidad especial:** Recogida o Experto (potencia ataques débiles).

### 🪨⚡ Geodude, Graveler y Golem de Alola

![Image](https://github.com/user-attachments/assets/f5f82615-af10-458c-b7a4-755c5fae189f)

- **Tipo:** Roca / Eléctrico  
- **Diferencia:** Desarrollaron partículas magnéticas que atraen metales y permiten lanzar rocas eléctricas.  
- **Habilidad especial:** Cabeza Roca o Imán (potencia ataques eléctricos).

### 🏜️⚙️ Diglett y Dugtrio de Alola  

![Image](https://github.com/user-attachments/assets/293c7c81-0546-4849-b716-9f3cbfbc7258)

- **Tipo:** Tierra / Acero  
- **Diferencia:** Sus cabellos metálicos les permiten detectar vibraciones y se consideran sagrados en Alola.  
- **Habilidad especial:** Velo Arena o Pelaje Recio (reduce daño de ataques físicos).

### 💀🔥 Marowak de Alola  

![Image](https://github.com/user-attachments/assets/9a7a27e8-2602-485e-ab34-7a161c313af3)

- **Tipo:** Fuego / Fantasma  
- **Diferencia:** Tras la muerte de su madre, Marowak de Alola adoptó una nueva forma con huesos ardiendo, lo que le da una apariencia fantasmal.  
- **Habilidad especial:** Espejo Mágico o Cuerpo Llama (daño por contacto al atacante). 

### ⚡ **Raichu de Alola**  

![Image](https://github.com/user-attachments/assets/bcf38998-b41a-4905-90c3-9faf369c5129)

- **Tipo:** Eléctrico / Psíquico  
- **Habilidad:** Cola Surf  
- **Diferencia:** Desarrolló habilidades psíquicas y surfea en su cola electrificada.  

## 🌊 Impacto de las Formas de Alola  
Las Formas Regionales de Alola fueron la primera gran variación en la apariencia y tipo de los Pokémon en la saga principal, influenciando regiones posteriores como Galar, Hisui y Paldea.

🔙 [Volver al inicio](https://mvillegasuc.github.io/Proyecto_CS/develop/VENCES/)  

---

## <a id="galar"></a>🏰GALAR

Las Formas de Galar son versiones alternativas de Pokémon que han evolucionado de manera diferente en la región de Galar, influenciadas por su clima frío, su entorno montañoso y su historia marcada por la revolución industrial. Estas variantes presentan cambios en tipos, habilidades y apariencia, adaptándose a las condiciones únicas de esta región inspirada en el Reino Unido. Muchas de estas formas reflejan elementos de la cultura británica y tienen un diseño más robusto o mecánico en comparación con sus versiones originales.

## 🏴‍☠️ Ejemplos de Formas de Galar

## 🐱 Meowth (Galar)

![Image](https://github.com/user-attachments/assets/eefe31c1-6c36-43b8-bb9b-9eb25fc5942e)

En Galar, Meowth desarrolló un pelaje más grueso y desaliñado, adaptándose a las duras condiciones de la región. Esta variante se convirtió en un Pokémon de tipo **Acero**, endureciendo su cuerpo como defensa ante enemigos.  

- **Tipo:** 🛡️ Acero  
- **Habilidad:** Pelaje Recio (reduce el daño recibido)  
- **Evolución:** Meowth de Galar evoluciona en **Perrserker**, un nuevo Pokémon en lugar de Persian.  


## 🦥 Slowpoke y Slowbro (Galar)  

![Image](https://github.com/user-attachments/assets/8031a817-415a-4664-a671-fcbdacd04ed0)

El Slowpoke de Galar tiene una dieta rica en especias locales, lo que ha cambiado su coloración y composición corporal. Su evolución en Slowbro de Galar es notablemente diferente a la versión de Kanto.  

- **Tipo:** 🌿 Psíquico  
- **Habilidad:** Ritmo Propio / Regeneración  
- **Slowbro (Galar)**: La Shellder en su brazo ha liberado una toxina que lo vuelve más agresivo y lo dota de un nuevo tipo.  
  - **Tipo:** 🔫 Veneno / Psíquico  
  - **Habilidad:** Francotirador (aumenta el daño de golpes críticos)  


## 🧙‍♂️ Slowking (Galar)  

![Image](https://github.com/user-attachments/assets/eaf56508-489d-4923-8b0d-5aba8d300f3e)

En esta versión, la Shellder en su cabeza ha liberado sustancias psíquicas, otorgándole un aire místico y oscuro. Slowking de Galar parece un hechicero con un gran conocimiento arcano.  

- **Tipo:** 🔮 Veneno / Psíquico  
- **Habilidad:** Extraño Poder (aumenta ataques especiales)  


## 🦄 Ponyta y Rapidash (Galar)  

![Image](https://github.com/user-attachments/assets/b2020ab0-6a0a-497d-a672-9127a3dc9a22)

Influenciados por la atmósfera mágica de los bosques de Galar, Ponyta y Rapidash han desarrollado una apariencia etérea y majestuosa.  

- **Ponyta (Galar)**  
  - **Tipo:** 🌀 Psíquico  
  - **Habilidad:** Fuga / Velo Pastel (protege de estados alterados)  
- **Rapidash (Galar)**  
  - **Tipo:** 🌀 Psíquico / Hada  
  - **Habilidad:** Velo Pastel  


## 💀 Corsola (Galar)  

![Image](https://github.com/user-attachments/assets/792ee25f-9533-4dc4-9c2c-845a541ffbbd)

Debido a un cambio drástico en el ecosistema marino de Galar, Corsola ha adoptado una forma fantasmal, representando el daño ambiental en los océanos.  

- **Tipo:** 👻 Fantasma  
- **Habilidad:** Cuerpo Maldito  

Evoluciona en **Cursola**, una nueva forma evolucionada con un cuerpo espectral.  


## 🏹 Farfetch'd (Galar)  

![Image](https://github.com/user-attachments/assets/5e100123-7850-48a6-afd7-cd69d1d12c55)

En Galar, Farfetch’d se ha vuelto más fuerte y resistente, perfeccionando su habilidad con el puerro hasta convertirse en un combatiente experto.  

- **Tipo:** ⚔️ Lucha  
- **Habilidad:** Impasible / Nerviosismo  

Evoluciona en **Sirfetch’d**, que empuña un escudo y una lanza hecha de su puerro.  


## 🦝 Zigzagoon y Linoone (Galar)  

![Image](https://github.com/user-attachments/assets/3f0d19e6-f974-42a0-bcac-62c7a9aeb49b)

Las formas de Galar de Zigzagoon y Linoone son más agresivas y energéticas, con un patrón de color en blanco y negro.  

- **Zigzagoon (Galar)**  
  - **Tipo:** 🦊 Siniestro / Normal  
  - **Habilidad:** Recogida / Gula  
- **Linoone (Galar)**  
  - **Tipo:** 🦊 Siniestro / Normal  
  - **Habilidad:** Audaz  

Linoone de Galar puede evolucionar en **Obstagoon**, una nueva evolución con una actitud rebelde.  


## 🔥 Darumaka y Darmanitan (Galar) 

![Image](https://github.com/user-attachments/assets/7a9bf19d-0b8f-45f6-848e-329de2d13912)

Para resistir el frío de Galar, Darumaka ha cambiado su biología, reemplazando su tipo Fuego por Hielo.  

- **Darumaka (Galar)**  
  - **Tipo:** ❄️ Hielo  
  - **Habilidad:** Espíritu Vital  
- **Darmanitan (Galar)**  
  - **Tipo:** ❄️ Hielo  
  - **Habilidad:** Modo Daruma (cambia a Hielo/Fuego cuando se activa)  


## 🌫️ Weezing (Galar)  

![Image](https://github.com/user-attachments/assets/7b5de38f-5d3f-42af-8043-19f55971a403)

Weezing ha absorbido gases industriales en Galar, purificando el aire a su alrededor y adoptando una apariencia de magnate del siglo XIX con sus chimeneas de humo.  

- **Tipo:** ☠️ Veneno / Hada  
- **Habilidad:** Levitación / Gas Reactivo (neutraliza habilidades del oponente)  


## 🏺 Yamask (Galar)  

![Image](https://github.com/user-attachments/assets/e37fe840-ff3e-405c-bb67-6eccae4c1161)

A diferencia del Yamask normal, el de Galar ha fusionado su alma con una losa maldita, otorgándole un aspecto más enigmático.  

- **Tipo:** 👻 Fantasma / Tierra  
- **Habilidad:** Inmunidad  

Evoluciona en **Runerigus**, una forma completamente nueva inspirada en runas antiguas.  


## ⚡ Stunfisk (Galar)  

![Image](https://github.com/user-attachments/assets/164e5dc7-89b2-4ca2-be67-fb9313b932b6)

Stunfisk ha desarrollado una forma que imita una trampa en el suelo, con un diseño inspirado en placas de metal.  

- **Tipo:** 🛡️ Tierra / Acero  
- **Habilidad:** Trampa Acero (impide huir a los rivales)  


## 🎭 Mr. Mime (Galar) 

![Image](https://github.com/user-attachments/assets/279620ae-e5ce-4f21-98f4-0b2be2a9d174)

En Galar, Mr. Mime ha desarrollado una afinidad con el hielo, moviéndose de manera grácil como un patinador.  

- **Tipo:** ❄️ Hielo / Psíquico  
- **Habilidad:** Ignorante / Pié Veloz  

Evoluciona en **Mr. Rime**, un Pokémon con un diseño más inspirado en el teatro y el baile.  


## 🔥🕊️ Articuno, Zapdos y Moltres (Galar) 

![Image](https://github.com/user-attachments/assets/c0c4139b-21bd-42e8-9c71-be0287a72122)

Las aves legendarias de Kanto tienen formas regionales completamente nuevas en Galar, con cambios drásticos en sus tipos y habilidades.  

- **Articuno (Galar)**

![Image](https://github.com/user-attachments/assets/ed44c282-4fd0-4345-ae49-a422294b46e9)

  - **Tipo:** 🔮 Psíquico / Volador  
  - **Habilidad:** Vista Lince

- **Zapdos (Galar)**

![Image](https://github.com/user-attachments/assets/c00f6e6f-df65-4331-bbc8-7e007c9147fa)

  - **Tipo:** ⚔️ Lucha / Volador  
  - **Habilidad:** Competitivo

- **Moltres (Galar)**

![Image](https://github.com/user-attachments/assets/ec4aceef-121c-4c2c-a712-635060a983b2)

  - **Tipo:** 🦊 Siniestro / Volador  
  - **Habilidad:** Cólera Ardiente  

🔙 [Volver al inicio](https://mvillegasuc.github.io/Proyecto_CS/develop/VENCES/)

---

## <a id="hisui"></a>🏛️HISUI

Las Formas de Hisui representan adaptaciones ancestrales de Pokémon a las duras condiciones de esta región del pasado. Influenciados por un entorno salvaje, primitivo y lleno de peligros, estos Pokémon desarrollaron cambios significativos en sus tipos, habilidades y apariencia. La mayoría adoptó estas formas como respuesta a las condiciones climáticas extremas y al constante enfrentamiento con Pokémon salvajes, reflejando una evolución forzada por la supervivencia en un mundo mucho más hostil que el actual.

## 🏴‍☠️ Ejemplos de Formas de Hisui

## 🐶 Growlithe y Arcanine (Hisui)  

![Image](https://github.com/user-attachments/assets/28808d9e-15f0-4829-85f5-1c377facfa5c)

Growlithe de Hisui ha desarrollado un pelaje grueso para resistir el frío y un cuerno de piedra en su cabeza que usa para atacar. Su evolución, Arcanine de Hisui, combina la fiereza con una apariencia imponente de guerrero.  

- **Growlithe (Hisui)**  
  - **Tipo:** 🔥 Fuego / 🏔️ Roca  
  - **Habilidad:** Intimidación / Absorbe Fuego  
- **Arcanine (Hisui)**  
  - **Tipo:** 🔥 Fuego / 🏔️ Roca  
  - **Habilidad:** Intimidación / Absorbe Fuego  

---

## ⚡ Voltorb y Electrode (Hisui)  

![Image](https://github.com/user-attachments/assets/3e7d91ab-551f-4a04-bd07-fd878b9d1a3c)

Voltorb y Electrode de Hisui han adoptado un diseño de madera, inspirado en las antiguas Poké Balls de la región.  

- **Voltorb (Hisui)**  
  - **Tipo:** ⚡ Eléctrico / 🌿 Planta  
  - **Habilidad:** Sebo / Electromotor  
- **Electrode (Hisui)**  
  - **Tipo:** ⚡ Eléctrico / 🌿 Planta  
  - **Habilidad:** Sebo / Electromotor  

---

## 🔥 Typhlosion (Hisui)  

![Image](https://github.com/user-attachments/assets/31287ab3-c20f-41ea-98b4-6edb6f1bdece)

Typhlosion de Hisui tiene un aura espiritual, reflejando su conexión con el mundo de los fantasmas. Su fuego es más etéreo, dándole un aspecto místico.  

- **Tipo:** 🔥 Fuego / 👻 Fantasma  
- **Habilidad:** Absorbe Fuego / Fracaso Vital  

---

## ☠️ Qwilfish (Hisui)  

![Image](https://github.com/user-attachments/assets/0008ba50-6f01-4ae6-9fd4-34326e561c53)

Qwilfish de Hisui ha desarrollado toxinas más peligrosas y una agresividad extrema.  

- **Tipo:** ☠️ Veneno / ⚫ Siniestro  
- **Habilidad:** Punto Tóxico / Adaptabilidad  

Evoluciona en **Overqwil**, una nueva forma aún más letal.  

---

## 🐆 Sneasel (Hisui)

![Image](https://github.com/user-attachments/assets/588c435c-281f-4d56-a7a0-67cb89ac78c3)

Sneasel de Hisui ha cambiado su biología para adaptarse a la caza en terrenos rocosos y montañosos.  

- **Tipo:** 🏔️ Lucha / ☠️ Veneno  
- **Habilidad:** Presión / Toque Tóxico  

Evoluciona en **Sneasler**, un Pokémon más ágil y sigiloso.  

---

## 🌊 Samurott (Hisui) 

![Image](https://github.com/user-attachments/assets/73116ac5-0b04-4155-ba94-29c42df3dc1a)

Samurott de Hisui tiene un aire más oscuro y salvaje, con una personalidad implacable en batalla.  

- **Tipo:** 🌊 Agua / ⚫ Siniestro  
- **Habilidad:** Foco Interno / Concentra Energía  

---

## 💃 Lilligant (Hisui)  

![Image](https://github.com/user-attachments/assets/5aac2514-6515-4aed-9b9a-ffb56400fea3)

Lilligant de Hisui ha adoptado una forma más ágil, adaptándose a su entorno con movimientos elegantes y rápidos.  

- **Tipo:** 🌿 Planta / ⚔️ Lucha  
- **Habilidad:** Clorofila / Competitivo  

---

## 🐺 Zorua y Zoroark (Hisui)  

![Image](https://github.com/user-attachments/assets/27318fed-7c04-4f7c-a48a-dc986f0e650a)

Zorua y Zoroark de Hisui han adoptado una forma fantasmal tras ser expulsados de sus hábitats originales, absorbiendo la energía negativa de su tragedia.  

- **Zorua (Hisui)**  
  - **Tipo:** 👻 Fantasma / ⚫ Siniestro  
  - **Habilidad:** Ilusión  
- **Zoroark (Hisui)**  
  - **Tipo:** 👻 Fantasma / ⚫ Siniestro  
  - **Habilidad:** Ilusión  

---

## 🦅 Braviary (Hisui)  

![Image](https://github.com/user-attachments/assets/02564ce9-cf83-4acc-a122-d05996943902)

Braviary de Hisui ha desarrollado poderes psíquicos y se ha convertido en un ave majestuosa con una presencia imponente.  

- **Tipo:** 🔮 Psíquico / 🕊️ Volador  
- **Habilidad:** Agallas / Competitivo  

---

## 🐌 Sliggoo y Goodra (Hisui)  

![Image](https://github.com/user-attachments/assets/1ff77905-e3d7-4040-bc2d-dfa99ac5be3d)

Sliggoo y Goodra han desarrollado un caparazón metálico que los protege en su entorno húmedo y pantanoso.  

- **Sliggoo (Hisui)**  
  - **Tipo:** 🐉 Dragón / 🛡️ Acero  
  - **Habilidad:** Baba / Caparazón  
- **Goodra (Hisui)**  
  - **Tipo:** 🐉 Dragón / 🛡️ Acero  
  - **Habilidad:** Baba / Caparazón  

---

## ❄️ Avalugg (Hisui)  

![Image](https://github.com/user-attachments/assets/789fa3d9-f60e-4b8c-86d3-bc68290a89aa)

Avalugg de Hisui se ha vuelto aún más resistente, con una estructura rocosa y afilada que lo hace más peligroso en combate.  

- **Tipo:** ❄️ Hielo / 🏔️ Roca  
- **Habilidad:** Robustez / Muro de Hielo  

---

## 🍃 Decidueye (Hisui)

![Image](https://github.com/user-attachments/assets/a719d52c-c6ec-4455-a07e-9c6c4c971fa4)

Decidueye de Hisui ha cambiado su estilo de combate para adaptarse a la vida en los bosques de la región, volviéndose más ágil y fuerte en combate cuerpo a cuerpo.  

- **Tipo:** 🌿 Planta / ⚔️ Lucha  
- **Habilidad:** Espesura / Remate  

---

🔙 [Volver al inicio](https://mvillegasuc.github.io/Proyecto_CS/develop/VENCES/)

---

## <a id="paldea"></a>🔥PALDEA

Las Formas de Paldea representan adaptaciones de Pokémon a un entorno diverso influenciado por el clima, la cultura y el ecosistema únicos de la región. Estos Pokémon han desarrollado nuevas habilidades, tipos y apariencias que reflejan la singularidad de Paldea. Sus formas surgen como resultado de su integración con las costumbres locales y la necesidad de ajustarse a los variados paisajes de la región.

## 🏴‍☠️ Ejemplos de Formas de Paldea

## 🐂 Tauros (Paldea) y sus tres variedades

![Image](https://github.com/user-attachments/assets/c809171c-1dfd-4da3-88ba-c8b9b11ab608)

En Paldea, Tauros ha desarrollado una estructura corporal más musculosa y resistente. Existen tres formas diferentes, cada una con un tipo adicional según la región donde habitan.  

### 🔹 Tauros (Forma Combatiente)  

![Image](https://github.com/user-attachments/assets/a0ab4b9a-8bb2-4ce4-8341-8a590329e2d0)

La forma más común en Paldea. Su pelaje negro le ayuda a disipar el calor y es extremadamente agresivo.  

- **Tipo:** ⚔️ Lucha  
- **Habilidad:** Intimidación / Absorbe Energía  


### 🔥 Tauros (Forma Llama)  

![Image](https://github.com/user-attachments/assets/067f327e-3d14-49bb-b1e3-da3917d3a6c4)

Exclusivo de ciertas zonas de Paldea, ha desarrollado una relación con el fuego, lo que lo vuelve aún más feroz.  

- **Tipo:** ⚔️ Lucha / 🔥 Fuego  
- **Habilidad:** Intimidación / Absorbe Energía


### 🌊 Tauros (Forma Acuática) 

![Image](https://github.com/user-attachments/assets/8fb52416-23e7-4ce5-ad9f-c566236462bc)

Adaptado a los cuerpos de agua de Paldea, su constitución le permite nadar y combatir en el agua con facilidad.  

- **Tipo:** ⚔️ Lucha / 🌊 Agua  
- **Habilidad:** Intimidación / Absorbe Energía  

---

## 🦎 Wooper (Paldea)  

![Image](https://github.com/user-attachments/assets/dea69426-9883-4cb4-ac9e-a5dd1a30a493)

Wooper de Paldea ha dejado atrás su afinidad con el agua y ha desarrollado una biología más resistente al entorno terrestre. Su piel secreta un veneno letal para protegerse de los depredadores.  

- **Tipo:** ☠️ Veneno / 🏔️ Tierra  
- **Habilidad:** Punto Tóxico / Absorbe Agua  

Evoluciona en **Clodsire**, una forma completamente nueva adaptada al ambiente pantanoso de Paldea.  

---

🔙 [Volver al inicio](https://mvillegasuc.github.io/Proyecto_CS/develop/VENCES/)

---

## <a id="convergente"></a>🔄CONVERGENTE

Las Formas Convergentes son especies de Pokémon que, aunque se asemejan a otras ya conocidas, no están relacionadas evolutivamente. Este parecido es producto de la evolución convergente, un fenómeno en el que diferentes especies desarrollan características similares al adaptarse a entornos parecidos. En regiones como Paldea y Noroteo, se han descubierto varios Pokémon que presentan este tipo de evolución, destacándose por sus similitudes visuales con especies previas, pero con orígenes y tipos completamente distintos.

## 🔄 Ejemplos de Formas Convergentes

## 🍄 Toedscool y Toedscruel  

![Image](https://github.com/user-attachments/assets/b65126d9-8f0b-41f0-a84c-46031a21d0e7)

Aunque parecen ser una variante de Tentacool y Tentacruel, **Toedscool** y **Toedscruel** son una especie completamente distinta que habita en los bosques de Paldea.  

### 🍄 Toedscool  
Un Pokémon con apariencia de hongo que se mueve corriendo sobre sus tentáculos.  

- **Tipo:** 🌿 Planta / 🏔️ Tierra  
- **Habilidad:** Velo Fértil / Cura Natural  

### 🍄 Toedscruel  
Al evolucionar, desarrolla tentáculos más largos y una estructura corporal que le permite desplazarse con gran velocidad por la tierra.  

- **Tipo:** 🌿 Planta / 🏔️ Tierra  
- **Habilidad:** Velo Fértil / Cura Natural  

---

## 🐍 Wiglett y Wugtrio  

![Image](https://github.com/user-attachments/assets/5d08c367-ce61-4f84-9e8f-362b46f6950b)

Aunque se asemejan a Diglett y Dugtrio, **Wiglett** y **Wugtrio** son en realidad una especie completamente diferente que habita en entornos marinos.  

### 🐍 Wiglett  
Este Pokémon vive semienterrado en la arena y se mueve con rapidez para capturar presas.  

- **Tipo:** 🌊 Agua  
- **Habilidad:** Escapista / Velo Arena  

### 🐍 Wugtrio  
Al evolucionar, Wiglett desarrolla tres cuerpos independientes que trabajan juntos para cazar con precisión.  

- **Tipo:** 🌊 Agua  
- **Habilidad:** Escapista / Velo Arena  

---

## 🍵 Poltchageist y Sinistcha 

![Image](https://github.com/user-attachments/assets/0a48da48-f866-45a3-8fcb-4384e70009d2)

Aunque recuerdan a Sinistea y Polteageist, estos Pokémon no son variantes de ellos, sino especies completamente diferentes originarias de Noroteo.  

### 🍵 Poltchageist  
Este Pokémon habita en zonas de Noroteo y tiene la apariencia de té matcha con propiedades espirituales.  

- **Tipo:** 👻 Fantasma / 🌿 Planta  
- **Habilidad:** Absorbe Energía / Hospitalidad  

### 🍵 Sinistcha  
Su evolución potencia sus habilidades místicas y se convierte en un Pokémon aún más enigmático.  

- **Tipo:** 👻 Fantasma / 🌿 Planta  
- **Habilidad:** Absorbe Energía / Hospitalidad  

---

🔙 [Volver al inicio](https://mvillegasuc.github.io/Proyecto_CS/develop/VENCES/)

---

## <a id="paradox-pasado"></a>⏳PARADOX PASADO

Los Pokémon Paradoja del Pasado son criaturas antiguas descubiertas en la Zona Cero de Paldea, cuya existencia plantea grandes misterios sobre el tiempo y la evolución. Aunque su origen exacto es incierto, se cree que fueron traídos desde el pasado mediante una máquina del tiempo. Estas especies presentan rasgos prehistóricos y salvajes, actuando como versiones ancestrales de Pokémon modernos, con diferencias notables en tipo, habilidades y comportamiento.

## 🔄 Ejemplos de Pokémon Paradojas del Pasado

## 🦣 Colmilargo (Great Tusk)  

![Image](https://github.com/user-attachments/assets/1b35aa8b-4425-4f92-9702-8956283b15e5)

Este Pokémon se asemeja a **Donphan**, pero con un tamaño mayor y una apariencia más feroz.  

- **Tipo:** 🏔️ Tierra / 🏋️‍♂️ Lucha  
- **Habilidad:** Carga Cuark  

---

## 🐗 Colagrito (Scream Tail)  

![Image](https://github.com/user-attachments/assets/c7c92c24-b41f-4566-9562-b3575262669f)

Con la apariencia de un **Jigglypuff** antiguo, su estructura corporal sugiere que es una especie mucho más fuerte que su contraparte moderna.  

- **Tipo:** 🧚 Hada / 👊 Psíquico  
- **Habilidad:** Carga Cuark  

---

## 🍄 Furioseta (Brute Bonnet)  

![Image](https://github.com/user-attachments/assets/caa82959-d846-49d4-b8ff-66f64ad8f9b8)

Su aspecto es similar a **Amoonguss**, pero con una estructura más resistente y primitiva.  

- **Tipo:** 🌿 Planta / 👻 Siniestro  
- **Habilidad:** Carga Cuark  

---

## 🦁 Melenaleteo (Flutter Mane)  

![Image](https://github.com/user-attachments/assets/db2c2024-1751-46cb-ba36-d5968147a584)

Una versión antigua de **Misdreavus** que conserva una apariencia espectral y etérea.  

- **Tipo:** 👻 Fantasma / 🧚 Hada  
- **Habilidad:** Carga Cuark  

---

## 🦎 Reptalada (Slither Wing)  

![Image](https://github.com/user-attachments/assets/adc32b7a-95bb-40da-8dc5-33828459c20a)

Se cree que es un ancestro de **Volcarona**, con un cuerpo más adaptado a la vida terrestre.  

- **Tipo:** 🔥 Fuego / 🏋️‍♂️ Lucha  
- **Habilidad:** Carga Cuark  

---

## 🏜️ Pelarena (Sandy Shocks) 

![Image](https://github.com/user-attachments/assets/cd240cc0-8947-473d-b1df-f0e4f948d556)

Similar a **Magneton**, pero con una apariencia más primitiva y estructuras de hierro oxidadas.  

- **Tipo:** ⚡ Eléctrico / 🏔️ Tierra  
- **Habilidad:** Carga Cuark  

---

## 🌕 Bramaluna (Roaring Moon)  

![Image](https://github.com/user-attachments/assets/a1b57c9b-1131-41b4-abb3-e6a9650893bb)

Se parece a **Salamence**, pero con rasgos más draconianos y feroces.  

- **Tipo:** 🐉 Dragón / 👻 Siniestro  
- **Habilidad:** Carga Cuark  

---

## 🏇 Koraidon  

![Image](https://github.com/user-attachments/assets/a7d98a75-8640-45ce-a207-05eacc369ae6)

Uno de los Pokémon legendarios de Paldea, con un diseño basado en reptiles antiguos.  

- **Tipo:** 🏋️‍♂️ Lucha / 🐉 Dragón  
- **Habilidad:** Motor Hadrónico  

---

## 🌊 Ondulagua (Raging Bolt)  

![Image](https://github.com/user-attachments/assets/4ed7f8f0-915e-4eba-a845-1c2ae7b0b144)

Un Pokémon con apariencia de **Raikou**, pero con un cuerpo más adaptado a climas prehistóricos.  

- **Tipo:** ⚡ Eléctrico / 🌊 Agua  
- **Habilidad:** Carga Cuark  

---

## 🔥 Flamariete (Gouging Fire)  

![Image](https://github.com/user-attachments/assets/bead8fbb-fc8d-430f-b6a6-dca428d7feaa)

Similar a **Entei**, pero con una forma mucho más agresiva y colmillos flamígeros.  

- **Tipo:** 🔥 Fuego / 🏋️‍♂️ Lucha  
- **Habilidad:** Carga Cuark  

---

## ⚡ Electrofuria (Iron Crown) 

![Image](https://github.com/user-attachments/assets/698d4916-709b-4ac1-a911-c5748d6bc1bd)

Inspirado en **Cobalion**, pero con una estructura más primitiva y un aspecto brutal.  

- **Tipo:** 🏋️‍♂️ Lucha / ⚡ Eléctrico  
- **Habilidad:** Carga Cuark  

---

🔙 [Volver al inicio](https://mvillegasuc.github.io/Proyecto_CS/develop/VENCES/)

---

## <a id="paradox-futuro"></a>⏳PARADOX FUTURO

Los Pokémon Paradoja del Futuro son versiones avanzadas y mecanizadas de Pokémon actuales, descubiertas en la Zona Cero de Paldea. Se cree que provienen del futuro y que llegaron mediante tecnología desconocida, posiblemente a través de una máquina del tiempo. Estas criaturas presentan diseños futuristas, inspirados en inteligencia artificial y mejoras cibernéticas, lo que les otorga habilidades únicas y tipos distintos en comparación con sus contrapartes del presente.

## 🔄 Ejemplos de Pokémon Paradojas del Futuro

# 🤖 Pokémon Paradoja del Futuro  

Los **Pokémon Paradoja del Futuro** son versiones avanzadas y mecanizadas de Pokémon actuales. Se cree que fueron traídos del futuro mediante tecnología desconocida en la zona cero de Paldea. Poseen diseños futuristas y parecen estar basados en inteligencia artificial o en mejoras cibernéticas.  

---

## 🚴‍♂️ Ferrodada (Iron Treads)  

![Image](https://github.com/user-attachments/assets/88306ee1-a017-4aa1-971b-a2b0db42f1f6)

Se asemeja a **Donphan**, pero con un cuerpo metálico y una movilidad mejorada.  

- **Tipo:** 🏔️ Tierra / ⚡ Eléctrico  
- **Habilidad:** Carga Cuark  

---

## 🧊 Ferrosaco (Iron Bundle)  

![Image](https://github.com/user-attachments/assets/0cccccd9-fe7b-4759-86c6-4e35b9722815)

Una versión robótica de **Delibird**, con un cuerpo optimizado para velocidad y ataques helados.  

- **Tipo:** ❄️ Hielo / ⚡ Agua  
- **Habilidad:** Carga Cuark  

---

## ✋ Ferropalmas (Iron Hands)  

![Image](https://github.com/user-attachments/assets/e23ba0d8-aa55-44c4-9c6e-68dd174ca21a)

Parece una versión mecánica de **Hariyama**, con un cuerpo reforzado para el combate.  

- **Tipo:** 🏋️‍♂️ Lucha / ⚡ Eléctrico  
- **Habilidad:** Carga Cuark  

---

## 🦕 Ferrocuello (Iron Jugulis)  

![Image](https://github.com/user-attachments/assets/e9c48579-2597-4e1b-93f6-17a19ff66b15)

Inspirado en **Hydreigon**, pero con un diseño más parecido a un dron de combate.  

- **Tipo:** 🐉 Dragón / 👻 Siniestro  
- **Habilidad:** Carga Cuark  

---

## 🦋 Ferropolilla (Iron Moth)  

![Image](https://github.com/user-attachments/assets/9bb48bda-5042-4342-8e5f-f5d137d123e5)

Una variante futurista de **Volcarona**, con una estructura más elegante y tecnológica.  

- **Tipo:** 🔥 Fuego / ⚡ Veneno  
- **Habilidad:** Carga Cuark  

---

## 🦔 Ferropúas (Iron Thorns)  

![Image](https://github.com/user-attachments/assets/64e419af-d1bf-4110-8449-dfb4946a1549)

Un **Tyranitar** mecanizado con un diseño más angular y luces neón en su cuerpo.  

- **Tipo:** 🏔️ Roca / ⚡ Eléctrico  
- **Habilidad:** Carga Cuark  

---

## ⚔️ Ferropaladín (Iron Valiant)  

![Image](https://github.com/user-attachments/assets/d74cf147-96d9-4c21-b079-58c5bbe9ca16)

Un híbrido entre **Gardevoir** y **Gallade**, con una apariencia más agresiva.  

- **Tipo:** 🏋️‍♂️ Lucha / 🧚 Hada  
- **Habilidad:** Carga Cuark  

---

## 🏎️ Miraidon  

![Image](https://github.com/user-attachments/assets/4a130ca8-c56d-4eb5-851b-f11cbcdff96d)

Uno de los Pokémon legendarios de Paldea, con un diseño basado en motocicletas futuristas.  

- **Tipo:** ⚡ Eléctrico / 🐉 Dragón  
- **Habilidad:** Motor Hadrónico  

---

## 🍃 Ferroverdor (Iron Leaves)  

![Image](https://github.com/user-attachments/assets/4a64ac04-08d2-4993-9431-45b43e25cf30)

Un Pokémon inspirado en **Virizion**, con un cuerpo cibernético y mejorado.  

- **Tipo:** 🌿 Planta / 🏋️‍♂️ Psíquico  
- **Habilidad:** Carga Cuark  

---

## ⛏️ Ferromole (Iron Boulder)  

![Image](https://github.com/user-attachments/assets/c5506148-c2c5-4378-8f76-74445fd8c919)

Una versión avanzada de **Terrakion**, con un diseño más imponente y eficiente.  

- **Tipo:** 🏔️ Roca / 🏋️‍♂️ Lucha  
- **Habilidad:** Carga Cuark  

---

## 🦾 Ferrotesta (Iron Crown)  

![Image](https://github.com/user-attachments/assets/1e8ca5a7-c9e2-432e-bee6-9dd899108c57)

Basado en **Cobalion**, con un cuerpo metálico y optimizado para la batalla.  

- **Tipo:** 🏋️‍♂️ Lucha / ⚡ Eléctrico  
- **Habilidad:** Carga Cuark  

---

🔙 [Volver al inicio](https://mvillegasuc.github.io/Proyecto_CS/develop/VENCES/)

---

## <a id="referencias"></a>🤝REFERENCIAS

En esta sección se encuentran las páginas que ayudaron para crear la información de este repositorio, en ellas tambien se encuentra información adicional a la brindada anteriormente.

---

- [Pókemon Official Dex](https://www.pokemon.com/el/pokedex)
- [WikiDex](https://www.wikidex.net/wiki/WikiDex)
- [Evolución por ADAPTACIÓN](https://www.ugr.es/~jmgreyes/adaptacion.html)
- [Pokeminers](https://pokeminers.com/graphics/)
- [La mecánica que cambió Pokémon](https://www.youtube.com/watch?v=6IdyqfSFtS0&t=626s)
- [Serebii.net](https://www.serebii.net/)

---

🔙 [Volver al inicio](https://mvillegasuc.github.io/Proyecto_CS/develop/VENCES/)
