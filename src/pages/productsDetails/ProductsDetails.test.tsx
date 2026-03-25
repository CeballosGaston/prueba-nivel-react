import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductsDetails from "./ProductsDetails";
import { describe, it, expect } from "vitest";

describe("ProductsDetails", () => {
  it("muestra mensaje si no encuentra el álbum", () => {
    render(
      <MemoryRouter initialEntries={["/products/999"]}>
        <Routes>
          <Route path="/products/:albumId" element={<ProductsDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Album Not Found/i)).toBeInTheDocument();
  });
});
