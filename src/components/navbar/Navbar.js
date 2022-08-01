import React from "react";
import { HStack, Nav } from "../base/Flex";
import { Container } from "../container";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { IconButton } from "../base/Button";
import { Heading } from "../base/Text";

const Navbar = () => {
  return (
    <Nav className="bg-white dark:bg-slate-800">
      <Container>
        <HStack className={"h-14 items-center justify-between"}>
          <Heading variant="h3">LADZ</Heading>
          <HStack>
            <IconButton icon={<BsSearch />} />
            <IconButton
              icon={<BsThreeDotsVertical />}
              className={"md:hidden"}
            />
          </HStack>
        </HStack>
      </Container>
    </Nav>
  );
};

export default Navbar;
