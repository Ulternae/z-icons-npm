import React from 'react';

export interface LanSquareAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareA: React.FC<LanSquareAProps>;
export default LanSquareA;
