import React from 'react';

export interface MinaPercentageSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageSquareSolid: React.FC<MinaPercentageSquareSolidProps>;
export default MinaPercentageSquareSolid;
