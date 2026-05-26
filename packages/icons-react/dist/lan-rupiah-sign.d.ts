import React from 'react';

export interface LanRupiahSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRupiahSign: React.FC<LanRupiahSignProps>;
export default LanRupiahSign;
