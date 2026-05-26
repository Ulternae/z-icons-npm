import React from 'react';

export interface LanUserAlienThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAlienThin: React.FC<LanUserAlienThinProps>;
export default LanUserAlienThin;
