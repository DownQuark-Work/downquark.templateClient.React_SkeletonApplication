import React from 'react';
import NavLink from '../../../src/js/components/nav/navLink';
// validators/spec/components/navLink.spec.js
// src/js/components/nav/navLink.js
import renderer from 'react-test-renderer';

test('NavLink changes the class when hovered', () => {
  const component = renderer.create(
    <NavLink page="http://www.facebook.com">Facebook</NavLink>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});