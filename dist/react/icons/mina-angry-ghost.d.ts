import React from 'react';

export interface MinaAngryGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAngryGhost: React.FC<MinaAngryGhostProps>;
export default MinaAngryGhost;
