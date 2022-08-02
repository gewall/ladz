import React, { useState } from "react";
import { Box, Flex, HStack, Nav } from "../base/Flex";
import { Container } from "../Container";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { IconButton } from "../base/Button";
import { Heading } from "../base/Text";
import { Link } from "../base/Link";
import { useDispatch } from "../../lib/hooks";

const Navbar = () => {
  const [logged, setLogged] = useState(false);

  const dispatch = useDispatch();

  return (
    <Nav className="bg-white dark:bg-slate-800 drop-shadow-md shadow-white">
      <Container>
        <HStack className={"h-14 items-center justify-between"}>
          <Link to="/" nonPadding>
            <Heading variant="h3">LADZ</Heading>
          </Link>
          <HStack className="h-full">
            <Flex>
              <IconButton
                icon={<BsSearch />}
                onClick={() => {
                  console.log("EAA");
                }}
              />
              <IconButton
                icon={<BsThreeDotsVertical />}
                onClick={() =>
                  dispatch({ type: "SWITCH_FIXEDSIDEBAR", payload: true })
                }
                className={"md:hidden"}
              />
              <Flex className={"hidden md:flex"}>
                {logged ? (
                  <Link to={"/"}>Profil</Link>
                ) : (
                  <Link to={"/"}>Login</Link>
                )}
              </Flex>
            </Flex>
          </HStack>
        </HStack>
      </Container>
    </Nav>
  );
};

export default Navbar;
