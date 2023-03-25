**This project is looking for motivated maintainers, see [this issue](https://github.com/mfrachet/rn-placeholder/issues/179) for more information.**

---

![Image of the placeholder in action](./assets/placeholder.gif)

# Usage

## Installation

```javascript
yarn add rn-placeholder
```

## In your code

```jsx
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-poaceholder";

const App = () => (
  <Placeholder
    Animation={Fade}
  >
    <PlaceholderLine width={80} />
    <PlaceholderLine />
    <PlaceholderLine width={30} />
  </Placeholder>
);
```

The web app is available in this github pages: <https://mfrachet.github.io/rn-placeholder>.

## V3 features

- Rewritten in [Typescript](https://www.typescriptlang.org/)
- Less code, more fun 😎
- API [Suspense](https://reactjs.org/docs/code-splitting.html#suspense) oriented
- [New animations](./src/animations)
