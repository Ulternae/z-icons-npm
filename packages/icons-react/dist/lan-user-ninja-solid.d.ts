import React from 'react';

export interface LanUserNinjaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserNinjaSolid: React.FC<LanUserNinjaSolidProps>;
export default LanUserNinjaSolid;
