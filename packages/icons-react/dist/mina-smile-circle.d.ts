import React from 'react';

export interface MinaSmileCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSmileCircle: React.FC<MinaSmileCircleProps>;
export default MinaSmileCircle;
