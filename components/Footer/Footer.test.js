import React from 'react' ;
import {render,screen} from '@testing-library/react' ;
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer' ;
import Footer from './Footer'



test("Footer Name",()=>{
    render (<Footer />);
    const FooterEl = screen.getByText(/ Privacy Policy /i)
    expect(FooterEl).toBeInTheDocument();

}) ;
