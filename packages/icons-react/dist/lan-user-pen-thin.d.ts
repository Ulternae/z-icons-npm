import React from 'react';

export interface LanUserPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPenThin: React.FC<LanUserPenThinProps>;
export default LanUserPenThin;
