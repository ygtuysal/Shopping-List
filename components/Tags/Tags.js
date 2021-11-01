import React from "react";
import {
  Group196,
  Tags,
  FlexWrapperOne,
  Group88,
  SearchTag,
  FlexWrapperTwo,
  Group519,
  Vector,
  All,
  Num18,
  Group520,
  Beach,
  Num9,
  Item,
  People,
  Num9Two
} from "./Tags.style";

const TagsComponent = () => {
  return (
    <Group196>
      <Tags data-testid="Tags">Tags</Tags>
      <FlexWrapperOne>
        <Group88>
          <SearchTag>Search tag</SearchTag>
        </Group88>
        <Group196>
          <FlexWrapperTwo>
            <Group519>
              <Vector
                alt=""
                src=""
              />
            </Group519>
            <All>All</All>
            <Num18>(18)</Num18>
          </FlexWrapperTwo>
          <FlexWrapperTwo>
            <Group520 />
            <Beach>Beach</Beach>
            <Num9>(9)</Num9>
          </FlexWrapperTwo>
          <FlexWrapperTwo>
            <Item />
            <People>People</People>
            <Num9Two>(9)</Num9Two>
          </FlexWrapperTwo>
          <FlexWrapperTwo>
            <Item />
            <People>Bicycle</People>
            <Num9Two>(9)</Num9Two>
          </FlexWrapperTwo>
        </Group196>
      </FlexWrapperOne>
    </Group196>
  );
};

export default TagsComponent;