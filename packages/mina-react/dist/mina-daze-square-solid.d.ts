import React from 'react';

export interface MinaDazeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDazeSquareSolid(props: MinaDazeSquareSolidProps): React.ReactElement;
export default MinaDazeSquareSolid;
