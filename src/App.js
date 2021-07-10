import { CssModule } from "./components/CssModule";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModule />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
