import React from 'react';

export interface LanSquareLThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLThin: React.FC<LanSquareLThinProps>;
export default LanSquareLThin;
