import React from 'react';

export interface MinaSpinnerOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSpinnerOneSolid: React.FC<MinaSpinnerOneSolidProps>;
export default MinaSpinnerOneSolid;
