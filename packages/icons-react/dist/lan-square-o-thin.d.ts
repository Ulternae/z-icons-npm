import React from 'react';

export interface LanSquareOThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareOThin: React.FC<LanSquareOThinProps>;
export default LanSquareOThin;
