import React from 'react';

export interface MinaHeadingTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadingTwo: React.FC<MinaHeadingTwoProps>;
export default MinaHeadingTwo;
