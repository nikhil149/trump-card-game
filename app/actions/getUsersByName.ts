import client from "@/libs/prismadb";

export default async function getUsersByName(userName: string) {
  console.log(userName);
  try {
    const users = await client.user.findMany({
      where: { name: userName },
    });
    console.log(users);
    return users;
  } catch (error) {
    console.log("Unable to fetch users");
  }
}
