import React, { useEffect, useState } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

export default function MainHeader({ data }) {
  const [titles, setTitles] = useState();
  //titles = ["Html","Css","JavaScript","React"]
  useEffect(() => {
    setTitles(Object.keys(data));
  }, [data]);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {titles &&
            titles.map((e, i) => (
              <Nav.Link key={i} href={`/${e}`}>
                {e}
              </Nav.Link>
            ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
// {
//   "Html": {
//     "tags": {
//       "img": "asdasd",
//       "h1": "alaksmd;almsd"
//     }
//   },
//   "Css": {
//     "unit": {
//       "pixel": "asdasd",
//       "rem": "alaksmd;almsd"
//     },
//     "bla": {
//       "asd": "asd"
//     }
//   },
//   "JavaScript": {
//     "condition": {
//       "if else": "asdasd",
//       "true false": "alaksmd;almsd"
//     }
//   },
//   "React": {
//     "hook": {
//       "useState": "asdasd",
//       "useEffect": "alaksmd;almsd"
//     },
//     "element": {
//       "jsx": "asda",
//       "createElement": "asd"
//     }
//   }
// }
