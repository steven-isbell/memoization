import React, { Component } from 'react';

// This component will rerender everytime it's parent passes it props,
// even if the props value is the same.
// e.g. Steven => Josh will rerender the component
// Steven => Steven will rerender the component
class NotCached extends Component {
  render() {
    return <div>Hello, {this.props.name}.</div>;
  }
}

// PureComponent `memoizes` or enables caching of props values.
// It will do a shallow check (only 1 level, no nested objects) on your props
// and if the props haven't changed, PureComponent will not rerender.
// It will also not rerender it's children, so it's important that all of the components
// beneath it are pure, meaning they don't edit their props directly.
import React, { PureComponent } from 'react';

class Cached extends PureComponent {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

import React from 'react';

// Same as above, but a functional component, not caching props
const NotCachedFunctionalComponent = props => {
  return <div>Hello, {props.name}</div>;
};

// Memo is a new react tool that wraps our functional components.
// It's basically PureComponent for functional components.
// It enables caching of simple props and will only rerender (recalculate)
// when receiving new props.
import React, { memo } from 'react';

const CachedFunctionalComponent = memo(props => {
  return <div>Hello, {props.name}</div>;
});
