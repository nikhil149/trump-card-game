import client from "@/libs/prismadb";

export default async function getUsersByName(userName: string) {
  try {
    const users = await client.user.findMany({ where: { name: userName } });
    return users;
  } catch (error) {
    console.log("Unable to fetch users");
  }
}
