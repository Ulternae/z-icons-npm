import React from 'react';

export interface LanSquareGThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareGThin: React.FC<LanSquareGThinProps>;
export default LanSquareGThin;
