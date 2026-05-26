import React from 'react';

export interface LanLariSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLariSign: React.FC<LanLariSignProps>;
export default LanLariSign;
