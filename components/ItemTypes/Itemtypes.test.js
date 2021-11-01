import { ItemTypes } from "./Itemtypes.style";

import renderer from 'react-test-renderer' ;

it("renders correctly", () => {
    const tree = shallow(<ItemTypes/>);
    expect(toJson(tree)).toMatchSnapshot();
  });
  