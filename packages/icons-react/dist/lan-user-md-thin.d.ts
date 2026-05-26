import React from 'react';

export interface LanUserMdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMdThin: React.FC<LanUserMdThinProps>;
export default LanUserMdThin;
