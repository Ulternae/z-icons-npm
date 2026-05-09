import React from 'react';

export interface MinaHeadingFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadingFive: React.FC<MinaHeadingFiveProps>;
export default MinaHeadingFive;
