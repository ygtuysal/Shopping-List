import React from 'react' ;
import {render,screen} from '@testing-library/react' ;
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer' ;
import BrandsComponent from './Brands';

beforeEach(()=>{
    render (<BrandsComponent />);
}) ;

test("Brand Name",()=>{
    const productsEl = screen.getByText(/ {brand.name}/i)
    expect(productsEl).toBeInTheDocument();

}) ;

test("Brand Controlles",()=>{
    const tree=renderer.create(<BrandsComponent  />).toJSON();
    expect(tree).toMatchSnapshot();
})