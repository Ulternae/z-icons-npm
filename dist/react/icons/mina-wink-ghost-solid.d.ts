import React from 'react';

export interface MinaWinkGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWinkGhostSolid: React.FC<MinaWinkGhostSolidProps>;
export default MinaWinkGhostSolid;
