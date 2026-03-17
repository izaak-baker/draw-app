import { Server, Socket } from 'socket.io';
import { addShape, getShapes, Shape } from './state';

export function registerHandlers(io: Server, socket: Socket): void {
  socket.emit('init', getShapes());

  socket.on('add_shape', (shape: Shape) => {
    addShape(shape);
    io.emit('add_shape', shape);
  });
}
