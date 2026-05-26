import React from 'react';

export interface LanSquareRThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRThin: React.FC<LanSquareRThinProps>;
export default LanSquareRThin;
