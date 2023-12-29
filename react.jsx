import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./css/app.css";

function MyComponent() {
  return (
    <div class="app>">
      <Parallax pages={5} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={2.5}>
          <div id="page1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div id="page2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div id="page3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div id="page4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div id="page5"></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default app;
