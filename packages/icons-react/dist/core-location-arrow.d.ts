import React from 'react';

export interface CoreLocationArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLocationArrow: React.FC<CoreLocationArrowProps>;
export default CoreLocationArrow;
