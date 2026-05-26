import React from 'react';

export interface LanSquareFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFull: React.FC<LanSquareFullProps>;
export default LanSquareFull;
