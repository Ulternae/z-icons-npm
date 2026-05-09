import React from 'react';

export interface MinaDiceTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceTwo: React.FC<MinaDiceTwoProps>;
export default MinaDiceTwo;
