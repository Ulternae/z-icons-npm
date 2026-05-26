import React from 'react';

export interface LanRupiahSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRupiahSignThin: React.FC<LanRupiahSignThinProps>;
export default LanRupiahSignThin;
