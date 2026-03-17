import { useEffect, useRef } from 'react';
import { Shape, ShapeType } from '../types';

type Props = {
  shapes: Shape[];
  activeTool: ShapeType;
  size: number;
  onPlace: (shape: Shape) => void;
};

export function Canvas({ shapes, activeTool, size, onPlace }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const shape of shapes) {
      ctx.fillStyle = '#0070f3';
      if (shape.type === 'circle') {
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size);
      }
    }
  }, [shapes]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const shape: Shape = {
      id: crypto.randomUUID(),
      type: activeTool,
      x,
      y,
      size,
    };
    onPlace(shape);
  }

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={800}
      onClick={handleClick}
      style={{ display: 'block', background: '#121212', cursor: 'crosshair' }}
    />
  );
}
