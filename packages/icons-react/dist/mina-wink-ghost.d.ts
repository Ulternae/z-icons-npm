import React from 'react';

export interface MinaWinkGhostProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWinkGhost: React.FC<MinaWinkGhostProps>;
export default MinaWinkGhost;
