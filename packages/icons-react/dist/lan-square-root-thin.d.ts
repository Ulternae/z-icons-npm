import React from 'react';

export interface LanSquareRootThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRootThin: React.FC<LanSquareRootThinProps>;
export default LanSquareRootThin;
