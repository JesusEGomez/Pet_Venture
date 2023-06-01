import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Text, Button, Input, Dropdown } from "@nextui-org/react";
import PetVentureLogo from "../../../../public/img/PetVentureLogo.svg"
import { SearchIcon } from "../Utils/searchbutton";

const NavBar: NextPage = () => {
  return (
    <Navbar isBordered >
    <Navbar.Brand>
      <Image
        width={360}
        height={70}
        priority
        src={PetVentureLogo}
        alt="Nuestro logo!"
      />
    </Navbar.Brand>
    <Input contentRight={ <SearchIcon initalValue="Buscar" fill="var(--nextui-colors-accents6)" size={16} />}/>
    <Navbar.Content hideIn="xs">
      <Navbar.Link href="#">Nosotros</Navbar.Link>
      <Navbar.Link href="#">Adopta</Navbar.Link>
      <Navbar.Link href="#">Tienda</Navbar.Link>
      <Navbar.Link href="#">Contacto</Navbar.Link>
    </Navbar.Content>            
    <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Ingresa
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Registrate
            </Button>
          </Navbar.Item>
        </Navbar.Content>
</Navbar>
  );
};


export default NavBar;
