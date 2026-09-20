 const d = {
  list: [
    /*=============================================================================*/
       {
      vids: [],
      name: "eu passei",
      author: "Ando7",
      id: 149214067,
      percentToQualify: 67,
      verificationVid: "https://youtu.be/x9oJxWBDkBA?is=qh6Ez-1Vy7K4TKPV",
    },
  ],
    },
        /*=============================================================================*/
    {
      vids: [
        {
          user: "example victor",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          percent: 100,
          hz: "360hz",
        },
      ],
      name: "eu passei",
      author: "Ando7",
      id: 149214067,
      percentToQualify: ,
      verificationVid: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  version: [3, 5, 0],
};
const list = d.list;
const version = d.version;
console.log(
  "%c my balls",
  "color: pink; font-weight: bold; background-color: rgb(50,10,40); padding: 2em; margin: 3em 2em 10em 20em; border: 3px solid black; border-radius: 1em; box-shadow: 10px 10px 8px pink;"
);

//automatically changes keys aka awesome
for (let x = 0; x < list.length; x++) {
  if (x < 100) {
    list[x].key = x;
  } else if (x >= 100) {
    list[x].legacykey = 0;
  }
}
