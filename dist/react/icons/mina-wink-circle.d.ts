import React from 'react';

export interface MinaWinkCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWinkCircle: React.FC<MinaWinkCircleProps>;
export default MinaWinkCircle;
