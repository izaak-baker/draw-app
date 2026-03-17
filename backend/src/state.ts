export type Shape = {
  id: string;
  type: 'circle' | 'square';
  x: number;
  y: number;
  size: number;
};

const shapes: Shape[] = [];

export function getShapes(): Shape[] {
  return shapes;
}

export function addShape(shape: Shape): void {
  shapes.push(shape);
}
