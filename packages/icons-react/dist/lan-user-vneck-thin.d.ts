import React from 'react';

export interface LanUserVneckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserVneckThin: React.FC<LanUserVneckThinProps>;
export default LanUserVneckThin;
