import React from 'react';

export interface MinaEuroCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroCircle: React.FC<MinaEuroCircleProps>;
export default MinaEuroCircle;
