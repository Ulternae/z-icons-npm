import React from 'react';

export interface LanSquareZThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareZThin: React.FC<LanSquareZThinProps>;
export default LanSquareZThin;
