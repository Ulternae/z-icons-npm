import React from 'react';

export interface LanShieldPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldPlus: React.FC<LanShieldPlusProps>;
export default LanShieldPlus;
