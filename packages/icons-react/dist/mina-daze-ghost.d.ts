import React from 'react';

export interface MinaDazeGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDazeGhost: React.FC<MinaDazeGhostProps>;
export default MinaDazeGhost;
