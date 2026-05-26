import React from 'react';

export interface LanDongSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDongSign: React.FC<LanDongSignProps>;
export default LanDongSign;
