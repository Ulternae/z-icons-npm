import React from 'react';

export interface LanBadgeDollarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeDollarThin: React.FC<LanBadgeDollarThinProps>;
export default LanBadgeDollarThin;
