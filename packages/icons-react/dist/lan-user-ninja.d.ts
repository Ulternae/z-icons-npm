import React from 'react';

export interface LanUserNinjaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserNinja: React.FC<LanUserNinjaProps>;
export default LanUserNinja;
