import React from 'react';

export interface LanGrid2PlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2PlusSolid: React.FC<LanGrid2PlusSolidProps>;
export default LanGrid2PlusSolid;
