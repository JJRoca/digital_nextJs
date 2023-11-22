import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { authOptions } from "../api/auth/[...nextauth]/route";
/* camilo@gmail.com       Jacinto@gmail.com    Mariano@gmail.com 

  password:camilo1234     jacinto1234          mariano1234*/
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("usuario");

  return <RegisterForm />;
}