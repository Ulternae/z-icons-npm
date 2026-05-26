import React from 'react';

export interface LanAriesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAriesSolid: React.FC<LanAriesSolidProps>;
export default LanAriesSolid;
