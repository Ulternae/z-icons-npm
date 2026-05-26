import React from 'react';

export interface LanSquareRupiahThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRupiahThin: React.FC<LanSquareRupiahThinProps>;
export default LanSquareRupiahThin;
