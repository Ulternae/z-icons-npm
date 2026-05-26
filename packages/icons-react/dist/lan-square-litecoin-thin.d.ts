import React from 'react';

export interface LanSquareLitecoinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLitecoinThin: React.FC<LanSquareLitecoinThinProps>;
export default LanSquareLitecoinThin;
