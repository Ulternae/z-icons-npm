import React from 'react';

export interface LanSirenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSirenThin: React.FC<LanSirenThinProps>;
export default LanSirenThin;
