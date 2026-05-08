import React from 'react';

export interface MinaArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowRight: React.FC<MinaArrowRightProps>;
export default MinaArrowRight;
