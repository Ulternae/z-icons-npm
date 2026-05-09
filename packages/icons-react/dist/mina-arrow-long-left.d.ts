import React from 'react';

export interface MinaArrowLongLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowLongLeft: React.FC<MinaArrowLongLeftProps>;
export default MinaArrowLongLeft;
