import React from 'react';

export interface LanShekelSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShekelSignThin: React.FC<LanShekelSignThinProps>;
export default LanShekelSignThin;
