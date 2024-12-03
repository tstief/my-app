/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";
import { Navbar, Nav, Container } from 'solid-bootstrap'

import './index.css';
import App from './App';
import MyComponent from './MyComponent';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const Layout = (props) => {
  return (
    <>
      <Container>
        <Navbar>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/myapp">My Component</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
      {props.children}
    </>
  );
};

render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={App} />
      <Route path="/myapp" component={MyComponent} />
    </Router>
  ),
  root
);