import React from 'react';

export interface MinaDazeCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDazeCircle(props: MinaDazeCircleProps): React.ReactElement;
export default MinaDazeCircle;
