import React from 'react';

export interface MinaSmileGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSmileGhost: React.FC<MinaSmileGhostProps>;
export default MinaSmileGhost;
