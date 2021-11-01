import React from 'react' ;
import {render,screen} from '@testing-library/react' ;
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Basket from './Basket' ;
import renderer from 'react-test-renderer' ;

beforeEach(()=>{
    render (<Basket />);
}) ;

test("Example Products",()=>{
    const productsEl = screen.getByText(/ {product.name}/i)
    expect(productsEl).toBeInTheDocument();

}) ;

test("Product items",()=>{
    const tree=renderer.create(<Basket  />).toJSON();
    expect(tree).toMatchSnapshot();
})