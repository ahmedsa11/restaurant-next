import CardList from "../components/home/card-list";
import Search from "../components/home/search";
import Navbar from "../sharedcomponent/navbar";

export default function Home() {
  return (
    <main>
      <Search />
      <CardList />
    </main>
  );
}
