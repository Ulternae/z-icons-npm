import React from 'react';

export interface MinaFatArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFatArrowUp: React.FC<MinaFatArrowUpProps>;
export default MinaFatArrowUp;
