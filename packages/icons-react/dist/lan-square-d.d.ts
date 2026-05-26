import React from 'react';

export interface LanSquareDProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareD: React.FC<LanSquareDProps>;
export default LanSquareD;
