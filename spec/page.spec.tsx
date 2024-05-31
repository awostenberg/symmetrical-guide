
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
//import {toHaveClass} from "@testing-library/jest-dom/extend-expect"

//import "@testing-library/jest-dom/extend-expect"

describe("home page", () => {
    it("renders the heading", () => {
        render(<Home />);

        expect(screen.getByRole("heading").textContent).toContain("Home Page");

       
    })

    it("has a button element", () => {

        render(<Home />);

        expect(screen.getByRole("button").textContent).toContain("Button");
    
  
    })

    it("has a daisy button element", () => {

        render(<Home />);
        const button = screen.getByRole("button");
        expect(button.getAttribute("class")).toContain("btn btn-primary"); //https://stackoverflow.com/a/72354391
             // above way because toHaveClass did not work as expected https://tinyurl.com/mtrt5c7d

    })
 

    it.todo("clicks the button")

    it.todo("tailwind css warnings upon require('daisyui') ")
    /* warn - As of Tailwind CSS v3.0, `blueGray` has been renamed to `slate`.
        warn - Update your configuration file to silence this warning.
    */
    
})