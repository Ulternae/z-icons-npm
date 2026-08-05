import React from 'react';

export interface MinaDazeGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDazeGhost(props: MinaDazeGhostProps): React.ReactElement;
export default MinaDazeGhost;
