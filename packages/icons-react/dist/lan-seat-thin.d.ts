import React from 'react';

export interface LanSeatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatThin: React.FC<LanSeatThinProps>;
export default LanSeatThin;
