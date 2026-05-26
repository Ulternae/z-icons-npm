import React from 'react';

export interface LanSquareThisWayUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareThisWayUp: React.FC<LanSquareThisWayUpProps>;
export default LanSquareThisWayUp;
