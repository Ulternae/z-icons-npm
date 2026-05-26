import React from 'react';

export interface LanBadgeDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeDollar: React.FC<LanBadgeDollarProps>;
export default LanBadgeDollar;
