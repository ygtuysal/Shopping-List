import React from "react";
import {
  Basket,
  Group528,
  FlexWrapperSix,
  ExampleProduct,
  Num1499,
  ButtonExtended,
  Sign,
  FlexWrapperThree,
  Count,
  SignTwo,
  Group149,
  ButtonExtendedTwo,
  Group213,
  Num999,
  Group,
  Num3997,
  Rectangle409
} from "./Basket.style";

const BasketComponent = () => {
  return (
    <Basket>
    <Rectangle409>
      <Group528>
        <FlexWrapperSix>
          <ExampleProduct>Example Product</ExampleProduct>
          <Num1499>₺14,99</Num1499>
        </FlexWrapperSix>
        <ButtonExtended>
          <Sign />
          <FlexWrapperThree>
            <Count>1</Count>
          </FlexWrapperThree>
          <SignTwo
            alt=""
            src=""
          />
        </ButtonExtended>
      </Group528>
      <Group149>
        <FlexWrapperSix>
          <ExampleProduct>Example Product</ExampleProduct>
          <Num1499>₺14,99</Num1499>
        </FlexWrapperSix>
        <ButtonExtendedTwo>
          <Sign />
          <FlexWrapperThree>
            <Count>1</Count>
          </FlexWrapperThree>
          <SignTwo
            alt=""
            src=""
          />
        </ButtonExtendedTwo>
      </Group149>
      <Group213>
        <FlexWrapperSix>
          <ExampleProduct>Example Product</ExampleProduct>
          <Num999>₺9,99</Num999>
        </FlexWrapperSix>
        <ButtonExtendedTwo>
          <Sign />
          <FlexWrapperThree>
            <Count>1</Count>
          </FlexWrapperThree>
          <SignTwo
            alt=""
            src=""
          />
        </ButtonExtendedTwo>
      </Group213>
      <Group>
        <Num3997>₺39,97</Num3997>
      </Group>
      </Rectangle409>
    </Basket>
  );
};

export default BasketComponent;