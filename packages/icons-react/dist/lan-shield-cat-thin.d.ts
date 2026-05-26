import React from 'react';

export interface LanShieldCatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldCatThin: React.FC<LanShieldCatThinProps>;
export default LanShieldCatThin;
