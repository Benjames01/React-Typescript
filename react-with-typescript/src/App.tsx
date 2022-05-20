import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';


export interface IState {
  people: {
    name: string,
    url: string,
    age: number,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "Enjoys Trix cereal and honey-oat granola for breakfast. Other cereals, including Fruity Pebbles, Frosted Flakes, and Cinnamon Toast Crunch, are also among his favorite foods."
    },
    {
      name: "Mike Tyson",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMjk1MjE2NDUwMzQ5MDAz/gettyimages-1170417494.jpg",
      age: 55,
      note: "Favourite dish is Chicken Tikka Masala from Tamarind Tribeca restaurant"
    },
    {
      name: "David Attenborough",
      url: "https://cdn.britannica.com/83/136183-050-28D77230/David-Attenborough-2008.jpg?w=400&h=300&c=crop",
      age: 96,
      note: ""
    }
  ])

  return (
    <div className="App">

      <h1>People invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
