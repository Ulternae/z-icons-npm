import React from 'react';

export interface MinaDazeCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDazeCircleSolid: React.FC<MinaDazeCircleSolidProps>;
export default MinaDazeCircleSolid;
