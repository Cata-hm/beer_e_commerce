import DrinkCategoryText from "../components/Texts/DrinkCategoryText";
import GreetingText from "../components/Texts/GreetingText";
import PopularText from "../components/Texts/PopularText";
import WelcomeText from "../components/Texts/WelcomeText";
import SearchBar from "../components/SearchBar/SearchBar";
import TopNavBar from "../components/NavBar/TopNavBar";
import BottomNavBar from "../components/NavBar/BottomNavBar";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Buttons from "@/components/Buttons/Buttons";

export default function ProductListingPage() {
  return (
    <div>
      <TopNavBar />
      <GreetingText />
      <WelcomeText />
      <SearchBar />
      <DrinkCategoryText />
      <div>
        <Buttons />
      </div>
      <PopularText />
      <CardsContainer />
      <BottomNavBar />
    </div>
  );
}
