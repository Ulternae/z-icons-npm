import React from 'react';

export interface MinaDiceSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceSix: React.FC<MinaDiceSixProps>;
export default MinaDiceSix;
