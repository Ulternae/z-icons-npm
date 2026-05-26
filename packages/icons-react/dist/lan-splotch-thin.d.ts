import React from 'react';

export interface LanSplotchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSplotchThin: React.FC<LanSplotchThinProps>;
export default LanSplotchThin;
