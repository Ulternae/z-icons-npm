import React from 'react';

export interface MinaArrowLongUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowLongUp: React.FC<MinaArrowLongUpProps>;
export default MinaArrowLongUp;
