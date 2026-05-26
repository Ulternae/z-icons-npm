import React from 'react';

export interface LanSquareListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareListThin: React.FC<LanSquareListThinProps>;
export default LanSquareListThin;
