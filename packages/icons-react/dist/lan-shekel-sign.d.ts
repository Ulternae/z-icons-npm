import React from 'react';

export interface LanShekelSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShekelSign: React.FC<LanShekelSignProps>;
export default LanShekelSign;
