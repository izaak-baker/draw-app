import { useState } from 'react';
import { Canvas } from './components/Canvas';
import { Toolbar } from './components/Toolbar';
import { useSocket } from './hooks/useSocket';
import { Shape, ShapeType } from './types';

function App() {
  const { shapes, addShape } = useSocket();
  const [activeTool, setActiveTool] = useState<ShapeType>('circle');
  const [size, setSize] = useState(40);

  function handlePlace(shape: Shape) {
    addShape(shape);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#121212' }}>
      <Toolbar
        activeTool={activeTool}
        size={size}
        onToolChange={setActiveTool}
        onSizeChange={setSize}
      />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Canvas
          shapes={shapes}
          activeTool={activeTool}
          size={size}
          onPlace={handlePlace}
        />
      </div>
    </div>
  );
}

export default App;
