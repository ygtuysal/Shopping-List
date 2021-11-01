import React from "react";
import {
  Group196,
  Brands,
  FlexWrapperOne,
  Group88,
  SearchBrand,
  FlexWrapperTwo,
  Group519,
  Vector,
  All,
  Num18,
  Group520,
  KonopelskiGroup,
  Num9,
  Item,
  RiceInc,
  Num9Two,
  ItemTwo,
  FeilDooleyAndReinger,
  Num9Three
} from "./Brands.style";

const BrandsComponent = () => {
  return (
    <Group196>
      <Brands>Brands</Brands>
      <FlexWrapperOne>
        <Group88>
          <SearchBrand>Search brand</SearchBrand>
        </Group88>
        <Group196>
          <FlexWrapperTwo>
            <Group519>
              <Vector
                alt=""
                src="https://static.overlay-tech.com/assets/a8dde3de-d626-4ad8-86ad-17eb725da642.svg"
              />
            </Group519>
            <All>All</All>
            <Num18>(18)</Num18>
          </FlexWrapperTwo>
          <FlexWrapperTwo>
            <Group520 />
            <KonopelskiGroup>
              Konopelski Group
            </KonopelskiGroup>
            <Num9>(9)</Num9>
          </FlexWrapperTwo>
          <FlexWrapperTwo>
            <Item />
            <RiceInc>Rice Inc</RiceInc>
            <Num9Two>(9)</Num9Two>
          </FlexWrapperTwo>
          <FlexWrapperTwo>
            <ItemTwo />
            <FeilDooleyAndReinger>
              Feil, Dooley and Reinger
            </FeilDooleyAndReinger>
            <Num9Three>(9)</Num9Three>
          </FlexWrapperTwo>
        </Group196>
      </FlexWrapperOne>
    </Group196>
  );
};

export default BrandsComponent;