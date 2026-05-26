import React from 'react';

export interface LanDongSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDongSignThin: React.FC<LanDongSignThinProps>;
export default LanDongSignThin;
