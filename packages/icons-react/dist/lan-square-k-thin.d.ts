import React from 'react';

export interface LanSquareKThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKThin: React.FC<LanSquareKThinProps>;
export default LanSquareKThin;
