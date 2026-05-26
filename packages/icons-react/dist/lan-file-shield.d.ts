import React from 'react';

export interface LanFileShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileShield: React.FC<LanFileShieldProps>;
export default LanFileShield;
