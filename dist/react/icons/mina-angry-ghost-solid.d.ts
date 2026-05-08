import React from 'react';

export interface MinaAngryGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAngryGhostSolid: React.FC<MinaAngryGhostSolidProps>;
export default MinaAngryGhostSolid;
