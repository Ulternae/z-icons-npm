import React from 'react';

export interface LanSquareFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareF: React.FC<LanSquareFProps>;
export default LanSquareF;
