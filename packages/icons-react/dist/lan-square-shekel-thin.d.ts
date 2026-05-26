import React from 'react';

export interface LanSquareShekelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareShekelThin: React.FC<LanSquareShekelThinProps>;
export default LanSquareShekelThin;
