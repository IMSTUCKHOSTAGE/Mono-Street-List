const d = {
  list: [
    /*=============================================================================*/
    {
      vids: [
        // { user: "", link: "", percent: 100, hz: "" },
      ],
      name: "mono lowkey a bum",
      author: "Potatil", // fill in
      id: 148988591,
      percentToQualify: 70, // fill in
      verificationVid: "https://youtu.be/0GeD-jdRYgY",
    },
        /*=============================================================================*/
    {
      vids: [
        // { user: "", link: "", percent: 100, hz: "" },
      ],
      name: "The better unnamed 2eu passei i beat it",
      author: "Ando7 (DIDY)", // fill in
      id: 149214067,
      percentToQualify: 50, // fill in
      verificationVid: "https://www.youtube.com/watch?v=XsQ9Xe8Fm1c",
    },
        /*=============================================================================*/
    {
      vids: [],
      name: "The better unnamed 2",
      author: "makermemes",
      id: 148988591,
      percentToQualify: 67,
      verificationVid: "https://youtu.be/x9oJxWBDkBA?is=qh6Ez-1Vy7K4TKPV",
    },
  ],
  version: [3, 5, 0],
};

const list = d.list;
const version = d.version;

console.log(
  "%c my balls",
  "color: pink; font-weight: bold; background-color: rgb(50,10,40); padding: 2em; margin: 3em 2em 10em 20em; border: 3px solid black; border-radius: 1em; box-shadow: 10px 10px 8px pink;"
);

// automatically changes keys aka awesome
for (let x = 0; x < list.length; x++) {
  if (x < 100) {
    list[x].key = x;
  } else {
    list[x].legacykey = 0;
  }
}
