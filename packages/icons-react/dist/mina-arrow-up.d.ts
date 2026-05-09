import React from 'react';

export interface MinaArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowUp: React.FC<MinaArrowUpProps>;
export default MinaArrowUp;
