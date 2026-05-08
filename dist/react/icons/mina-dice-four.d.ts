import React from 'react';

export interface MinaDiceFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceFour: React.FC<MinaDiceFourProps>;
export default MinaDiceFour;
