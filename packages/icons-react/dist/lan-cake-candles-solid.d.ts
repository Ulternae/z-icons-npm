import React from 'react';

export interface LanCakeCandlesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCakeCandlesSolid: React.FC<LanCakeCandlesSolidProps>;
export default LanCakeCandlesSolid;
