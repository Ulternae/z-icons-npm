import React from 'react';

export interface MinaSmileGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSmileGhostSolid: React.FC<MinaSmileGhostSolidProps>;
export default MinaSmileGhostSolid;
