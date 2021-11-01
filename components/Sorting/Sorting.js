import React from "react";
import {
  SortingTwo,
  Sorting,
  FlexWrapperTwo,
  NormalRadiobutton,
  FlexWrapperOne,
  Vector,
  PriceLowToHigh,
  NormalRadiobuttonTwo,
  PathCopy,
  PriceHighToLow,
  NormalRadiobuttonThree
} from "./Sorting.style";

const SortingComponent = () => {
  return (
    <SortingTwo>
      <Sorting data-testid="sorting">Sorting</Sorting>
      <FlexWrapperTwo>
        <NormalRadiobutton>
          <FlexWrapperOne>
            <Vector
              alt=""
              src=""
            />
          </FlexWrapperOne>
          <PriceLowToHigh>Price low to high</PriceLowToHigh>
        </NormalRadiobutton>
        <NormalRadiobuttonTwo>
          <PathCopy />
          <PriceHighToLow>Price high to low</PriceHighToLow>
        </NormalRadiobuttonTwo>
        <NormalRadiobuttonThree>
          <PathCopy />
          <PriceHighToLow>New to old</PriceHighToLow>
        </NormalRadiobuttonThree>
        <NormalRadiobuttonThree>
          <PathCopy />
          <PriceHighToLow>Old to new</PriceHighToLow>
        </NormalRadiobuttonThree>
      </FlexWrapperTwo>
    </SortingTwo>
  );
};

export default SortingComponent;