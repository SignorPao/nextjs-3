import Banner from "@/components/Banner";
import Destinations from "@/components/Destinations";
import Nearby from "@/components/Nearby";
import Search from "@/components/Search";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <main>
      <Banner />
      <Search />
      <Trending />
      <Destinations />
      <Nearby />
    </main>
  );
}
