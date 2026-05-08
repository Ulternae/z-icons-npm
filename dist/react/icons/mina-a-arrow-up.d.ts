import React from 'react';

export interface MinaAArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAArrowUp: React.FC<MinaAArrowUpProps>;
export default MinaAArrowUp;
