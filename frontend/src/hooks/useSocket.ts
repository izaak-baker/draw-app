import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Shape } from '../types';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL ?? 'http://localhost:3001';

export function useSocket() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(SOCKET_URL);
    socketRef.current = socket;

    socket.on('init', (initialShapes: Shape[]) => {
      setShapes(initialShapes);
    });

    socket.on('add_shape', (shape: Shape) => {
      setShapes((prev) => [...prev, shape]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  function addShape(shape: Shape): void {
    socketRef.current?.emit('add_shape', shape);
  }

  return { shapes, addShape };
}
