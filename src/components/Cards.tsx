import React from "react";

interface Props {
  children: string;
}

const cardInfo = [
  {
    cardTitle: "Card1",
    cardDescr: "This card does blah blah",
    cardButt: "Card Button",
  },
  {
    cardTitle: "Card2",
    cardDescr: "This card does der der",
    cardButt: "Card Button2",
  },
  {
    cardTitle: "Card3",
    cardDescr: "This card does meh meh",
    cardButt: "Card Button3",
  },
  {
    cardTitle: "Card4",
    cardDescr: "This card does bo bo",
    cardButt: "Card Button4",
  },
];

const Cards = ({ children }: Props) => {
  let itemCards = [
    "Card1",
    "Card2",
    "Card3",
    "Card4",
    "Card5",
    "Card6",
    "Card7",
  ];

  const getCardsMessage = () => {
    return itemCards.length === 0 && <p>No Cards Found</p>;
  };

  return (
    <>
      {getCardsMessage()}
      <div className="card-group row row-cols-md-3">
        {cardInfo.map((cardInfo) => (
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{cardInfo.cardTitle}</h5>
                <p className="card-text">{cardInfo.cardDescr}</p>
                <a href="#" className="btn btn-primary">
                  {cardInfo.cardButt}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
