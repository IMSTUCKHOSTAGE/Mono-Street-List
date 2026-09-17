 const d = {
  list: [
    /*=============================================================================*/
    {
      vids: [
        {
          user: "litdude",
          link: "https://www.youtube.com/watch?v=vf87NTxeHNI",
          percent: 100,
          hz: "360hz",
        },
        {
          user: "Willow",
          link: "https://www.youtube.com/watch?v=djyPOYUANjs",
          percent: 100,
          hz: "240hz",
        },
        {
          user: "nybia",
          link: "https://www.youtube.com/watch?v=QVmLpF2_Hok",
          percent: 100,
          hz: "360hz",
        },
        {
          user: "Draven",
          link: "https://youtu.be/QjM6gsxSGS8",
          percent: 100,
          hz: "360hz",
        },
{
          user: "N1x",
          link: "https://www.youtube.com/watch?v=4fzUBzbstCs",
          percent: 100,
          hz: "360hz",
        },
{
          user: "StormTrue",
          link: "https://www.youtube.com/watch?v=tujGyAsa868",
          percent: 100,
          hz: "240hz",
        },
{
          user: "jeyk",
          link: "https://medal.tv/games/geometry-dash/clips/2095SPBiusszHh/ICPtmF9Ng4fF?invite=cr-MSxiY20sMTQyMDAxNDAs?mobilebypass=true",
          percent: 100,
          hz: "360hz",
        },
        {
          user: "CIDIAM",
          link: "https://youtu.be/X8KafqWivQs",
          percent: 100,
          hz: "240hz",
        },
      ],
      name: "Shitty SADOMASOCHISM",
      author: "Jasker [Coakmuffer]",
      id: 81835814,
      percentToQualify: 100,
      verificationVid: "https://www.youtube.com/watch?v=ydYqELe-uA8",
    },
        /*=============================================================================*/
       {
      vids: [],
      name: "Shitty The Unseen",
      author: "Vinny",
      id: 66710746,
      percentToQualify: 100,
      verificationVid: "https://youtu.be/_3l47jIf30w",
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

//automatically changes keys aka awesome
for (let x = 0; x < list.length; x++) {
  if (x < 100) {
    list[x].key = x;
  } else if (x >= 100) {
    list[x].legacykey = 0;
  }
}
