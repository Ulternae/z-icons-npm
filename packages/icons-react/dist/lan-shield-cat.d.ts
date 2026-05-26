import React from 'react';

export interface LanShieldCatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCat: React.FC<LanShieldCatProps>;
export default LanShieldCat;
