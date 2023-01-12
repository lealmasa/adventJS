const gifts = ["bicicleta", "auto", "muñeca", "xbox"];

function wrapping() {
  for (let item of gifts) {
    var wrapper = "*";
    var lenght = gifts[0].length + gifts.indexOf(item) + 1;

    for (i = 0; i < lenght; i++) {
      wrapper += "*";
    }

    wrappedGift = wrapper + item + wrapper;

    console.log(wrappedGift);
  }
}
wrapping();
