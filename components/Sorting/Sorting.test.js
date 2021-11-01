import { render,screen } from "@testing-library/react";
import SortingComponent from "./Sorting";


test("Sorting renders correctly",()=>{
    render(<SortingComponent/>);

    const sortingEl = screen.getAllByTestId(/sorting/i);
    expect(sortingEl).toBeInTheDocument();
})