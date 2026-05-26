import React from 'react';

export interface LanShieldAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldAltThin: React.FC<LanShieldAltThinProps>;
export default LanShieldAltThin;
