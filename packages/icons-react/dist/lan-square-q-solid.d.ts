import React from 'react';

export interface LanSquareQSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQSolid: React.FC<LanSquareQSolidProps>;
export default LanSquareQSolid;
