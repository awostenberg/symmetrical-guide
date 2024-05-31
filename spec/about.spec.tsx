import { render, screen } from "@testing-library/react";
import About from "../src/app/about/page";

describe("about page", () => {

    it("renders about", () => {   
        render(<About />);
        expect(screen.getByText("About Page"))      //todo exact match, wanted partial..
        
    })
} )