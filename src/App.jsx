import React, { useState } from "react";
import { useTheme } from "react-jss";

import Container from "./components/Container";
import Counter from "./components/Counter";
import RepoSegment from "./components/RepoSegment";

import useGlobalStyles from "./styles/globalStyles";

export default function App() {
  const [count, setCount] = useState(0);

  const theme = useTheme();
  useGlobalStyles({ theme });

  return (
    <Container>
      <Counter count={count} setCount={setCount} />
      <RepoSegment count={count} />
    </Container>
  );
}
