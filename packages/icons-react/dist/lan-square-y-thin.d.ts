import React from 'react';

export interface LanSquareYThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareYThin: React.FC<LanSquareYThinProps>;
export default LanSquareYThin;
