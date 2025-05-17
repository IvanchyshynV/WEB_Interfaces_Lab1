import React, { useState } from 'react';
import ShopCard from "../shop-card/ShopCard";

const ListComponents = () => {
  const initialCards = [
    { id: 1, title: "Nadorcott's (шт)", price: 12, imgUrl: "mandarins.png", added: 0 },
    { id: 2, title: "Potatoes (kg)", price: 45, imgUrl: "potatoes.jpg", added: 0 },
    { id: 3, title: "Large Orange (шт)", price: 15, imgUrl: "orange.jpg", added: 0 },
    { id: 4, title: "Cucumber (шт)", price: 30, imgUrl: "cucumber.jpg", added: 0 },
  ];

  const [cards, setCards] = useState(initialCards);

  const totalPriceClick = (item) => {
    const updatedCards = cards.map((card) => {
      if (card.id === item.id) {
        return { ...card, added: card.added + 1 };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const removeItem = (item) => {
    const updatedCards = cards.map((card) => {
      if (card.id === item.id && card.added > 0) {
        return { ...card, added: card.added - 1 };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const totalPrice = cards.reduce((sum, item) => sum + item.added * item.price, 0);

  return (
    <main>
      <section className="container my-5">
        <div className="row">
          <div className="col-6 col-sm-5 col-md-4 col-xl-3">
            <h3>Total: {totalPrice} UAH</h3>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          {cards.map(item => (
            <ShopCard
              card={item}
              key={item.id}
              getItem={totalPriceClick}
              removeItem={removeItem}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ListComponents;
