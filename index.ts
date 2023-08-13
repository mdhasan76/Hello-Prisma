import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ____________get all users from postgresql db__________________
  // const getAllUser = await prisma.user.findMany();
  // console.log("hello users", getAllUser);

  // ____________Ceate user__________________
  const postUser = await prisma.user.create({
    data: {
      email: "shahria8064@gamil.com",
      name: "Shahria Jaman Khan",
    },
  });
  console.log("new user", postUser);
}

main().catch((err) => console.log(err));
