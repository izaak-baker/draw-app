import { ShapeType } from '../types';

type Props = {
  activeTool: ShapeType;
  size: number;
  onToolChange: (tool: ShapeType) => void;
  onSizeChange: (size: number) => void;
};

export function Toolbar({ activeTool, size, onToolChange, onSizeChange }: Props) {
  return (
    <div style={styles.toolbar}>
      <div style={styles.group}>
        <button
          onClick={() => onToolChange('circle')}
          style={{ ...styles.button, ...(activeTool === 'circle' ? styles.active : {}) }}
        >
          Circle
        </button>
        <button
          onClick={() => onToolChange('square')}
          style={{ ...styles.button, ...(activeTool === 'square' ? styles.active : {}) }}
        >
          Square
        </button>
      </div>
      <div style={styles.group}>
        <label style={styles.label}>Size: {size}px</label>
        <input
          type="range"
          min={10}
          max={150}
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    padding: '12px 16px',
    background: '#1e1e1e',
    borderBottom: '1px solid #333',
  },
  group: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  button: {
    padding: '6px 16px',
    background: '#333',
    color: '#fff',
    border: '1px solid #555',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  active: {
    background: '#0070f3',
    borderColor: '#0070f3',
  },
  label: {
    color: '#ccc',
    fontSize: '14px',
    minWidth: '80px',
  },
};
