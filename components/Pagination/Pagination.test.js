

import PaginationComponent from './Pagination';

it("renders correctly", () => {
    const tree = shallow(<PaginationComponent/>);
    expect(toJson(tree)).toMatchSnapshot();
  });
  