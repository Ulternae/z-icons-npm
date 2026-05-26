import React from 'react';

export interface LanCrossSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrossSolid: React.FC<LanCrossSolidProps>;
export default LanCrossSolid;
