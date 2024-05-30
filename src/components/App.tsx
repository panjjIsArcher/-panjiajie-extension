import Waterfall from "@/components/Waterfall.tsx";
import { imgs } from "@/mock/mock";
function App() {
  return (
    <Waterfall column={3}>
      <div>图片1</div>
      <div>图片2</div>
      {imgs}
    </Waterfall>
  );
}

export default App;
