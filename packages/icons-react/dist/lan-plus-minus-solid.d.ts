import React from 'react';

export interface LanPlusMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusMinusSolid: React.FC<LanPlusMinusSolidProps>;
export default LanPlusMinusSolid;
