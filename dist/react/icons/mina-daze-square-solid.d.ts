import React from 'react';

export interface MinaDazeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDazeSquareSolid: React.FC<MinaDazeSquareSolidProps>;
export default MinaDazeSquareSolid;
