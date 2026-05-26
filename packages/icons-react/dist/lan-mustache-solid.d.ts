import React from 'react';

export interface LanMustacheSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMustacheSolid: React.FC<LanMustacheSolidProps>;
export default LanMustacheSolid;
