import React from 'react';

export interface LanLitecoinSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLitecoinSignThin: React.FC<LanLitecoinSignThinProps>;
export default LanLitecoinSignThin;
