import React from 'react';

export interface MinaDiceFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceFive: React.FC<MinaDiceFiveProps>;
export default MinaDiceFive;
