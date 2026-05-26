import React from 'react';

export interface LanShieldCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCheck: React.FC<LanShieldCheckProps>;
export default LanShieldCheck;
