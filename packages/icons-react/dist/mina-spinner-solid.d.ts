import React from 'react';

export interface MinaSpinnerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSpinnerSolid: React.FC<MinaSpinnerSolidProps>;
export default MinaSpinnerSolid;
