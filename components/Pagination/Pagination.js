import React from "react";
import {
  Pagination,
  Frame1,
  ArrowRight,
  Group503,
  Prev,
  Num1,
  FlexWrapperOne,
  Num2,
  Num3,
  Num4,
  Num17,
  Num18,
  Num20,
  Next,
} from "./Pagination.style";

const PaginationComponent = () => {
  return (
    <Pagination>
      <Frame1>
        <ArrowRight alt="" src="" />
      </Frame1>
      <Group503>
        <Prev>Prev</Prev>
        <Num1>1</Num1>
        <FlexWrapperOne>
          <Num2>2</Num2>
        </FlexWrapperOne>
        <Num3>3</Num3>
        <Num4>4</Num4>
        <Num17>17</Num17>
        <Num18>18</Num18>
        <Num18>19</Num18>
        <Num20>20</Num20>
        <Next>Next</Next>
      </Group503>
      <Frame1>
        <ArrowRight
          alt=""
          src=""
        />
      </Frame1>
    </Pagination>
  );
};

export default PaginationComponent;
