import React from 'react';

export interface MinaHeadingFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadingFour: React.FC<MinaHeadingFourProps>;
export default MinaHeadingFour;
