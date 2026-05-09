import React from 'react';

export interface MinaSpinnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSpinner: React.FC<MinaSpinnerProps>;
export default MinaSpinner;
