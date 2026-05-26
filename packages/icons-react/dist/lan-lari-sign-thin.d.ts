import React from 'react';

export interface LanLariSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLariSignThin: React.FC<LanLariSignThinProps>;
export default LanLariSignThin;
