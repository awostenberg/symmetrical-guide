import { render, screen } from "@testing-library/react";
import Contact from "../src/app/about/contact/page";

describe("contact page", () => {

    it("renders contact", () => {   
        render(<Contact />);
        expect(screen.getByRole("heading").textContent).toContain("Contact Page");
        expect(screen.getByRole("paragraph").textContent).toContain("Phone")
    })


} )