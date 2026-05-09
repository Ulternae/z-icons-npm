import React from 'react';

export interface MinaDazeCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDazeCircle: React.FC<MinaDazeCircleProps>;
export default MinaDazeCircle;
