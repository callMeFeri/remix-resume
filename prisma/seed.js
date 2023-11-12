const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getNotes().map((note) => {
      return db.note.create({ data: note });
    })
  );
}

seed();

function getNotes() {
  return [
    {
      title: "dfzbv",
      content: "dfgsbfsbsfgvb",
      id: "2023-11-11T16:16:39.329Z",
    },
    { title: "sfgdd", content: "safdgsdv", id: "2023-11-11T16:17:46.320Z" },
    {
      title: "sfjlglndmfz",
      content: "jkasdfgkjcz",
      id: "2023-11-11T16:19:58.479Z",
    },
    {
      title: "jhafDKBZXKD",
      content: ",hsdfbJ<D",
      id: "2023-11-11T16:22:54.651Z",
    },
    { title: "nmn", content: "fhgghhj", id: "2023-11-11T19:39:00.117Z" },
  ];
}
