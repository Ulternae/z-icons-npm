import React from 'react';

export interface MinaDazeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDazeSquare: React.FC<MinaDazeSquareProps>;
export default MinaDazeSquare;
