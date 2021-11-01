import{render ,screen} from '@testing-library/react' ;
import Products from './Products' ;
test('Products render correctly',()=> {
   const {debug,container} = render(<Products/>) ;

   expect(container.firstChild).toHaveTextContent("Products");
   screen.debug();
})