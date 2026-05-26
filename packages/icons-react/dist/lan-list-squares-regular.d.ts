import React from 'react';

export interface LanListSquaresRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListSquaresRegular: React.FC<LanListSquaresRegularProps>;
export default LanListSquaresRegular;
