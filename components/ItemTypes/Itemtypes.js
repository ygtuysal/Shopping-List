import React from "react";
import {
  ItemTypes,
  ChipsActive,
  Text,
  Chips,
  TextTwo
} from "./Itemtypes.style";

const ItemTypesComponent = () => {
  return (
    <ItemTypes>
      <ChipsActive>
        <Text>mug</Text>
      </ChipsActive>
      <Chips>
        <TextTwo>shirt</TextTwo>
      </Chips>
    </ItemTypes>
  );
};

export default ItemTypesComponent;