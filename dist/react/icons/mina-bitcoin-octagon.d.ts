import React from 'react';

export interface MinaBitcoinOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinOctagon: React.FC<MinaBitcoinOctagonProps>;
export default MinaBitcoinOctagon;
