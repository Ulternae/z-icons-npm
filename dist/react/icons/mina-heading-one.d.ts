import React from 'react';

export interface MinaHeadingOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadingOne: React.FC<MinaHeadingOneProps>;
export default MinaHeadingOne;
