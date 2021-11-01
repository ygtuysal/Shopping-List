import { render,screen } from "@testing-library/react";
import TagsComponent from "./Tags";



test("Tags renders correctly",()=>{
    render(<TagsComponent/>);

    const TagsEl = screen.getAllByTestId(/Tags/i);
    expect(TagsEl).toBeInTheDocument();
})