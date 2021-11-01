import React from "react";
import {
  Header,
  Logo,
  BasketTwo,
  Group276,
  Basket,
  Group,
  Path1,
  Path,
  Num3997
} from "./header.style";

const HeaderComponent = () => {
  return (
    <Header data-testid="header">
      <Logo
        alt=""
        src="https://seeklogo.com/images/G/getir-logo-489FC74138-seeklogo.com.png"
      />
      <BasketTwo>
        <Group276>
          <Basket>
            <Group>
              <Path1
                alt=""
                src="https://seeklogo.com/images/G/getir-logo-489FC74138-seeklogo.com.png"
              />
              <Path />
            </Group>
          </Basket>
          <Num3997>₺ 39,97</Num3997>
        </Group276>
      </BasketTwo>
    </Header>
  );
};

export default HeaderComponent;