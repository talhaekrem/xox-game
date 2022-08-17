//resart olduğunda playerMovesun başlangıç hali
export const reset = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];

//kendi formülümde belli karelere ait kazanma koşullarının olası ihtimallerinin bulunduğu object.
//0 sol üst demek ve buradan yatay, dikey ve çapraz şeklilde kazabilir. bu durumlar ise dizi içersinde belirtilmiştir.
//tic-tac-toe oyununda toplamda 8 farklı koşulda kazabiliriz. bu koşulları sol üstten başlayacak şekilde karelere böldüm.
//olabildiğince en az kontrol çalıştırmak için
//tahta üzerindeki tüm Xler ve tüm O lar bu koşullara göre ayrı ayrı kontrol edilir. eğer 1 tanesini içeriyorsa kazanmıştır.
export const winnableStates = {
  0: ["012", "036", "048"],
  1: ["147"],
  2: ["246", "258"],
  3: ["345"],
  6: ["678"],
};

//kazanma şekline göre çizilen çizgilerin svg üzerindeki konumlarını belirten object. sol üst 0% 0% sağ alt 100% 100% demektir
export const svgLines = {
  line02: { x1: "5%", y1: "16.7%", x2: "95%", y2: "16.7%" },
  line06: { x1: "16.7%", y1: "5%", x2: "16.7%", y2: "95%" },
  line08: { x1: "5%", y1: "5%", x2: "95%", y2: "95%" },
  line17: { x1: "50%", y1: "5%", x2: "50%", y2: "95%" },
  line26: { x1: "95%", y1: "5%", x2: "5%", y2: "95%" },
  line28: { x1: "83.3%", y1: "5%", x2: "83.3%", y2: "95%" },
  line35: { x1: "5%", y1: "50%", x2: "95%", y2: "50%" },
  line68: { x1: "5%", y1: "83.3%", x2: "95%", y2: "83.3%" },
};
