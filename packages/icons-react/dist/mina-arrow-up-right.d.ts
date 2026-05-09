import React from 'react';

export interface MinaArrowUpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowUpRight: React.FC<MinaArrowUpRightProps>;
export default MinaArrowUpRight;
