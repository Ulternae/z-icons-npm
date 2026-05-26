import React from 'react';

export interface LanSquareVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareVThin: React.FC<LanSquareVThinProps>;
export default LanSquareVThin;
