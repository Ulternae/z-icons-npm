import React from 'react';

export interface MinaHeadingThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadingThree: React.FC<MinaHeadingThreeProps>;
export default MinaHeadingThree;
