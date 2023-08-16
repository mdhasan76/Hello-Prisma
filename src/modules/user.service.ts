import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUserToDB = async (data: User): Promise<User> => {
  const user = prisma.user.create({
    data,
  });
  return user;
};

const getUserFromDB = async (): Promise<User[]> => {
  const user = prisma.user.findMany();
  return user;
};

const insertOrUpdateProfileToDB = async (data: Profile): Promise<Profile> => {
  const doesExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (doesExist) {
    const profile = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return profile;
  }

  const profile = await prisma.profile.create({
    data: data,
  });

  return profile;
};

export const UserService = {
  createUserToDB,
  getUserFromDB,
  insertOrUpdateProfileToDB,
};
