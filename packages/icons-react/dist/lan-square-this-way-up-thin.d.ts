import React from 'react';

export interface LanSquareThisWayUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareThisWayUpThin: React.FC<LanSquareThisWayUpThinProps>;
export default LanSquareThisWayUpThin;
