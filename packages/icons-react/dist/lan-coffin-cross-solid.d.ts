import React from 'react';

export interface LanCoffinCrossSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffinCrossSolid: React.FC<LanCoffinCrossSolidProps>;
export default LanCoffinCrossSolid;
