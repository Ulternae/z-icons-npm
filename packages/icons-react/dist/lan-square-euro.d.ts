import React from 'react';

export interface LanSquareEuroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEuro: React.FC<LanSquareEuroProps>;
export default LanSquareEuro;
