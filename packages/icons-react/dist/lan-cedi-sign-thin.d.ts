import React from 'react';

export interface LanCediSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCediSignThin: React.FC<LanCediSignThinProps>;
export default LanCediSignThin;
