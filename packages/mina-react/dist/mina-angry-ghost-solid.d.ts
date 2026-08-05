import React from 'react';

export interface MinaAngryGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAngryGhostSolid(props: MinaAngryGhostSolidProps): React.ReactElement;
export default MinaAngryGhostSolid;
