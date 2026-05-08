import React from 'react';

export interface MinaSpinnerOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSpinnerOne: React.FC<MinaSpinnerOneProps>;
export default MinaSpinnerOne;
