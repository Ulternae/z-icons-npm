import React from 'react';

export interface LanCactusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCactusSolid: React.FC<LanCactusSolidProps>;
export default LanCactusSolid;
