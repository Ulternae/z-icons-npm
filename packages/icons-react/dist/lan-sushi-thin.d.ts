import React from 'react';

export interface LanSushiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSushiThin: React.FC<LanSushiThinProps>;
export default LanSushiThin;
