import { useState } from 'react';
import { useEffect } from 'react';

interface Styles {
  [key: string]: string;
}

export default function Grid() {
  const { keyPressed, columns } = useKeyPress('g');

  const containerStyles: Styles = {
    zIndex: '10000',
    position: 'fixed',
    top: '0',
    left: '50%',
    display: 'flex',
    width: '100%',
    height: '100%',
    maxWidth: '95rem',
    transform: 'translateX(-50%)',
    columnGap: `var(--space-gutter, 0)`,
    paddingLeft: `var(--space-container, 0)`,
    paddingRight: `var(--space-container, 0)`,
    pointerEvents: 'none',
  };

  const columnStyles: Styles = {
    flex: '1 1 0',
    backgroundColor: 'rgba(255, 0, 0, .1)',
  };
  return (
    <>
      {keyPressed && (
        <div style={containerStyles}>
          {columns.map((item, index) => (
            <span style={columnStyles} key={index}></span>
          ))}
        </div>
      )}
    </>
  );
}

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    let gridColumnsNumber = parseInt(
      window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--grid-columns')
    );

    setColumns(new Array(gridColumnsNumber).fill(''));

    const downHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed((keyPressed) => !keyPressed);
      }
    };
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  return { keyPressed, columns };
};
