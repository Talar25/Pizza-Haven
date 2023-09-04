import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PizzasMenu from "./components/PizzasMenu/PizzasMenu";
import Miscellaneous from "./components/Miscellaneous/Miscellaneous";
import Careers from "./pages/Careers/Careers";

const data = {
  pizzas: [
    {
      name: "Margherita",
      description: "tomato, mozzarella, basil",
      src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      prize: 30.95,
    },
    {
      name: "Marinara",
      description: "tomato, onion, garlic, oregano, basil, pecorino",
      src: "https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/9281/pizza-marinara.jpg",
      prize: 33.95,
    },
    {
      name: "Quatro fromaggi",
      description: "mozzarella, fontina, gorgonzola dolce, Grana Padano",
      src: "https://travelshelper.com/wp-content/uploads/2022/10/Pizza-QUATTRO-FORMAGGI-Italian-National-Food-By-Travel-S-Helper.jpg",
      prize: 37.95,
    },
    {
      name: "Pepperoni",
      description:
        "san marzano marinara, mozzarella, ezzo pepperoni, whipped ricotta, parmesan, basil, orange habanero honey",
      src: "https://www.unileverfoodsolutions.pl/dam/global-ufs/mcos/NEE/calcmenu/recipes/PL-recipes/general/pizza-peperoni/main-header.jpg",
      prize: 39.95,
    },
    {
      name: "Buffalo Chicken",
      description:
        "housemade ranch, mozzarella, fried chicken, blue cheese, frank's red hot sauce, parsley",
      src: "https://weirdandwildpizza.com/wp-content/uploads/2020/10/MAIN.jpg",
      prize: 41.95,
    },
    {
      name: "Pesto presto",
      description: "white pie, pine nut basil pesto, cherry tomatoes, feta",
      src: "https://staticsmaker.iplsc.com/smaker_prod_2020_06_03/f4719d8c0a79ee163829178f4a98bf62-content.jpg",
      prize: 37.95,
    },
    {
      name: "Spicy meatball",
      description: "mozzarella, pickled peppers, basil, pecorino",
      src: "https://media-cdn.tripadvisor.com/media/photo-m/1280/25/69/6d/13/spicy-meatball-pizza.jpg",
      prize: 42.95,
    },
    {
      name: "Roasted Mushroom",
      description: "bechamel, fontina, rosemary, thyme, garlic, grana padano",
      src: "https://www.tastingtable.com/img/gallery/roasted-mushroom-pizza-recipe/image-import.jpg",
      prize: 39.95,
    },
    {
      name: "Summer Veggie",
      description:
        "bechamel, zucchini, corn, cherry tomato garlic, chili, lemon, pecorino.",
      src: "https://www.vindulge.com/wp-content/uploads/2023/02/Vegetarian-Pizza-with-Caramelized-Onions-Mushrooms-Jalapeno-FI.jpg",
      prize: 36.95,
    },
  ],
  pastas: [
    {
      name: "Chitarra Aglio e Olio",
      description: "olive oil, garlic, chili, grana padano",
      src: "https://www.domsdish.com/uploads/1/1/7/2/117241934/img-6600_orig.jpeg",
      prize: 30.95,
    },
    {
      name: "Chitarra al Pomodoro",
      description: "tomato, garlic, basil, grana padano",
      src: "https://www.pastarmando.it/images/fotoutenti/_large/origano_2.jpg",
      prize: 42.55,
    },
    {
      name: "Pistachio Ravioli",
      description: "lemon, brown butter, mint, grana padano",
      src: "https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/basil-ravioli-with-arugula-pistachio-pesto-recipe.jpg",
      prize: 42.55,
    },
    {
      name: "Amatriciana",
      description: "tomato, red onion, guanciale, chili, grana padano",
      src: "https://www.insidetherustickitchen.com/wp-content/uploads/2021/07/Bucatini-Amatriciana-1200px-inside-the-rustic-kitchen.jpg",
      prize: 44.95,
    },
  ],
  beers: [
    {
      name: "Talea",
      type: "Hazy IPA",
      percentage: 5.4,
      prize: 18,
    },
    {
      name: "Talea Chocolate Oat",
      type: "Stout",
      percentage: 5.5,
      prize: 18,
    },
    {
      name: "Reissdorf Kolsch",
      type: "Wheat",
      percentage: 4.7,
      prize: 22,
    },
    {
      name: "Samuel Smith",
      type: "Stout",
      percentage: 5.0,
      prize: 22,
    },
    {
      name: "Athletic Brewing",
      type: "Hazy IPA",
      percentage: 8.5,
      prize: 20,
    },
    {
      name: "Flagship Blood Orange",
      type: "IPA",
      percentage: 6.5,
      prize: 22,
    },
    {
      name: "Coors Light",
      type: "Lager",
      percentage: 7.0,
      prize: 16,
    },
    {
      name: "Oberon",
      type: "Wheat",
      percentage: 7.0,
      prize: 16,
    },
    {
      name: "Stella Artois",
      type: "Pilsner",
      percentage: 5.9,
      prize: 18,
    },
  ],
  desserts: [
    {
      name: "Tiramisu",
      prize: 20,
    },
    {
      name: "Angel food cake",
      prize: 18,
    },
    {
      name: "Apple and butterscotch pie",
      prize: 22,
    },
    {
      name: "Almond and date cake",
      prize: 22,
    },
    {
      name: "Bannana Pudding",
      prize: 21,
    },
  ],
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Pizza-Haven/" element={<Homepage />} />
        <Route path="menu" element={<Menu />}>
          <Route index element={<Navigate replace to="pizzas" />} />
          <Route
            path="pizzas"
            element={<PizzasMenu data={data.pizzas} type="pizzas" />}
          />
          <Route
            path="pastas"
            element={<PizzasMenu data={data.pastas} type="pastas" />}
          />
          <Route
            path="Drinks"
            element={<Miscellaneous data={data.beers} type="drink" />}
          />
          <Route
            path="desserts"
            element={<Miscellaneous data={data.desserts} type="dessert" />}
          />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
