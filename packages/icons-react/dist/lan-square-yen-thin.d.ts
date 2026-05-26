import React from 'react';

export interface LanSquareYenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareYenThin: React.FC<LanSquareYenThinProps>;
export default LanSquareYenThin;
