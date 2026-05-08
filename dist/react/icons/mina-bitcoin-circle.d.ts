import React from 'react';

export interface MinaBitcoinCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinCircle: React.FC<MinaBitcoinCircleProps>;
export default MinaBitcoinCircle;
