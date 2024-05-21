import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

async function deleteUsers() {
  await prisma.user.deleteMany({});
}

async function deleteUser(userId: string) {
  const deletedUser = await prisma.user.delete({
    where: {
      email: userId,
    },
  });

  console.log("user was successfully deleted", deletedUser);
}

async function updateUser(
  username: string,
  {
    firstName,
    lastName,
  }: {
    firstName: string;
    lastName: string;
  }
) {
  await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });

  console.log("user was successfully updated");
}

async function CreateUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const newUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });

  console.log("user was created", newUser);
}

// CreateUser("gurpreet1", "kaur", "gk1@gmail.com", "pwd");
updateUser("gk1@gmail.com", {
  firstName: "surbhi",
  lastName: "bhandari",
});
