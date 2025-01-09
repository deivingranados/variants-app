import React from "react";
import Box from "../atoms/box";
import Button from "../atoms/button";
import { getRandomVariant } from "../utils/randomizer";

const boxVariants = [
  {
    title: "Develop",
    description:
      " profesional que se encarga de crear, diseñar y mantener programas informáticos.",
    backgroundColor: "#2471a3",
    borderRadius: "5px",
    color: "#f1c40f",
  },
  {
    title: "React",
    description:
      " Framework basado en javascript para crear interfaces de usuario.",
    backgroundColor: "#daf7a6",
    borderRadius: "50%",
    color: "#2ecc71",
  },
  {
    title: "Javascript",
    description:
      "Lenguaje de programacion mayor mente utilizado en la web, consolidandose hoy como unos de los mas importantes.",
    backgroundColor: "#edbb99",
    borderRadius: "0px",
    color: "#2980b9",
  },
];

const buttonVariants = [
  {
    text: "Click Me!",
    color: "#f7f9f9",
    backgroundColor: "#a569bd",
    width: "200px",
  },
  {
    text: "Press Here",
    color: "#2c3e50",
    backgroundColor: "#ff5733",
    width: "250px",
  },
  {
    text: "Submit",
    color: "#f9e79f",
    backgroundColor: "#FFC300",
    width: "300px",
  },
];

const RandomComponents = () => {
  const randomBox = getRandomVariant(boxVariants);
  const randomButton = getRandomVariant(buttonVariants);

  const handleAlert = () => {
    return alert(randomButton.text);
  };

  return (
    <div className="container">
      <Box
        style={randomBox}
        title={randomBox.title}
        description={randomBox.description}
      />
      <Button
        onclickAlert={handleAlert}
        text={randomButton.text}
        style={randomButton}
      />
    </div>
  );
};

export default RandomComponents;
