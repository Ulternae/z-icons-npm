import React from 'react';

export interface MinaDazeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDazeSquare(props: MinaDazeSquareProps): React.ReactElement;
export default MinaDazeSquare;
