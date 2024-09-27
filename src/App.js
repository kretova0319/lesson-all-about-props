import React from "react";
import "./App.css";
import Profile from "./Components/Profile";
import Shop from "./Components/shop";
import Country from "./Components/Country";
import CountryForMap from "./Components/CountryForMap";
// import image from "./flagFrance.jpeg";
import { DATA } from "./Components/data";

function App() {
  return (
    <section>
      {/* для проверки картинки: картинка не битая */}
      {/* <img src={image} alt="флаг Франции" /> */}
      <h2>Карточки добавлены каждая отдельно с указанием props</h2>
      <div className="wrapper">
        <Country
          title="Japan"
          location="Asia"
          language="Japanese"
          flag="https://media.istockphoto.com/id/654181326/photo/japanese-flag-is-waving-against-blue-sky.jpg?s=612x612&w=0&k=20&c=2a5amomm7WEpAd0xnUY31E0iG0yIoEQH32AKOcie4qA="
        />
        <Country
          title="Canada"
          location="North America"
          language="English"
          flag="https://images.unsplash.com/photo-1498940585432-8adcc4d43a19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsYWclMjBjYW5hZGF8ZW58MHx8MHx8fDA%3D"
        />
        <Country
          title="France"
          location="Europe"
          language="French"
          // flag="https://media.istockphoto.com/id/172301500/photo/flag-of-france.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ye_sj5hdBvJADriBceUMXp78AVZ_IVJ7l6n5sl7gyOE="
          // если ссылка - то работает, если строка 35 - то не работает.
          flag="./flagFrance.jpeg"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2>Карточки добавлены с использованием data и .map</h2>
      <div className="wrapper">
        {DATA.map((countryCard) => {
          return <CountryForMap {...countryCard} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="wrapper">
        <Shop
          tittle="Apple"
          type="Fruit"
          price="100"
          img="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
        />
        <Shop
          tittle="Pear"
          type="Fruit"
          price="150"
          img="https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVhcnxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Shop
          tittle="Mango"
          type="Fruit"
          price="350"
          img="https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuZ298ZW58MHx8MHx8fDA%3D"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="wrapper">
        <Profile
          title="Претендент 1"
          name="Ivan"
          surname="Ivanov"
          age="25"
          image="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"

          // image: "man1"
        />
        <Profile
          title="Претендент 2"
          name="Helen"
          surname="Frost"
          age="23"
          image="https://plus.unsplash.com/premium_photo-1661341006680-5ef1216f2754?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHx8MHx8fDA%3D"
        />
        <Profile
          title="Претендент 3"
          name="Rose"
          surname="Middle"
          age="33"
          image="https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww"
        />
      </div>
    </section>
  );
}

export default App;
