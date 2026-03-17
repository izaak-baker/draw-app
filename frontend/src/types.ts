export type ShapeType = 'circle' | 'square';

export type Shape = {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  size: number;
};
