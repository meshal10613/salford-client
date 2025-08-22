import Image from "next/image";
import Banner from "./Components/Banner";
import Features from "./Components/Features";
// import UserInfo from "./Components/UserInfo";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <div>
      <Banner/>
      {/* <UserInfo/> */}
      <Features/>
    </div>
  );
}
