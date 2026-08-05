import React from 'react';

export interface MinaDazeCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDazeCircleSolid(props: MinaDazeCircleSolidProps): React.ReactElement;
export default MinaDazeCircleSolid;
