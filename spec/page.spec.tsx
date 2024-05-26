
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page"

describe("home page", () => {
    it("renders the heading", () => {
        render(<Home />);

        expect(screen.getByRole("heading").textContent).toContain("Home Page");
        
    })
})