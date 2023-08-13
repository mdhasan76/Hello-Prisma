import { PrismaClient } from "@prisma/client";
import app from "./app";
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

async function main() {
  app.get("/", (req, res) => {
    res.send("hello prisma server");
  });

  app.listen(port, () => {
    console.log("server is running on port ");
  });

  // ____________get all users from postgresql db__________________
  // const getAllUser = await prisma.user.findMany();
  // console.log("hello users", getAllUser);
  // ____________Ceate user__________________
  // const postUser = await prisma.user.create({
  //   data: {
  //     email: "shahria8064@gamil.com",
  //     name: "Shahria Jaman Khan",
  //   },
  // });
  // console.log("new user", postUser);
}

main().catch((err) => console.log(err));
