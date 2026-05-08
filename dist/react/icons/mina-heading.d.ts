import React from 'react';

export interface MinaHeadingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeading: React.FC<MinaHeadingProps>;
export default MinaHeading;
