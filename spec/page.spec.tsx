
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page"

describe("home page", () => {
    it("renders the heading", () => {
        render(<Home />);

        expect(screen.getByRole("heading").textContent).toContain("Home Page");
        
    })

    it("has a button element", () => {

        render(<Home />);

        expect(screen.getByRole("button").textContent).toContain("Button");
    
    })

    it.todo("has a daisy button element")

    it.todo("clicks the button")
    
})