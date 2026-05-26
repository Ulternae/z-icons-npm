import React from 'react';

export interface LanLitecoinSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLitecoinSign: React.FC<LanLitecoinSignProps>;
export default LanLitecoinSign;
