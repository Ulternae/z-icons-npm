import React from 'react';

export interface MinaDazeGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDazeGhostSolid(props: MinaDazeGhostSolidProps): React.ReactElement;
export default MinaDazeGhostSolid;
