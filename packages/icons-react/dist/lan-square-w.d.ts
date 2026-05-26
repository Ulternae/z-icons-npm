import React from 'react';

export interface LanSquareWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareW: React.FC<LanSquareWProps>;
export default LanSquareW;
