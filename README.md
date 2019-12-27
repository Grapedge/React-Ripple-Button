# React Button Ripple Effect

React Button Ripple is a React component that uses the Hooks API.

## Dependence

- [react-spring@next]

## Using

```jsx
<RippleButton>Hello</RippleButton>
```

### Custom Button

```jsx
<button>
  <Ripple spawnData={spawnData} duration={500} />
  <span>{props.text}</span>
</button>
```

`spawnData` must include `x`, `y`, `time`.
- `x, y`: the click position relative to the parent element.
- `time`: always equals to `Date.now()` to distinguish different click events.

example:

```jsx
import { Ripple, calcEventRelativePos } from './ripple';

function onClick(event) {
  props.onClick && props.onClick();
  setSpawnData({
    ...calcEventRelativePos(event),
    time: Date.now()
  });
}
```

## Preview
![lZ2RjP.gif](https://s2.ax1x.com/2019/12/27/lZ2RjP.gif)