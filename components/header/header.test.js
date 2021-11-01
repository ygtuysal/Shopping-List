import { render,screen } from "@testing-library/react";
import HeaderComponent from './header';

test("Header renders correctly",()=>{
    render(<HeaderComponent/>);

    const headerEl = screen.getAllByTestId(/header/i);
    expect(headerEl).toBeInTheDocument();
})