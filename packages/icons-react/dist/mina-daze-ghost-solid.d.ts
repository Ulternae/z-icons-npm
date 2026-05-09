import React from 'react';

export interface MinaDazeGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDazeGhostSolid: React.FC<MinaDazeGhostSolidProps>;
export default MinaDazeGhostSolid;
