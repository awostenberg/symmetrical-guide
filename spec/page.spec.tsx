
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

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

    it("renders a ul", () => {

        render(<Home />);

        const listElements = document.querySelector("ul");
        expect(listElements).not.toBeNull();  
       
    })

    it.todo("renders an li with a link to about")
    it.todo("renders an li with link to home")

    it.todo("tailwind css warnings upon require('daisyui') ")
    /* warn - As of Tailwind CSS v3.0, `blueGray` has been renamed to `slate`.
        warn - Update your configuration file to silence this warning.
        
        noticed after loc 222 change of trimming down app/globals.css this warning is gone,
        but warning still gone on reverting that change, so I don't think that did the trick. 
        Perhaps warning is one-time and still ther? Test that with an /rm -f node_modules/ followed by /npm install/
       
    */
    
})