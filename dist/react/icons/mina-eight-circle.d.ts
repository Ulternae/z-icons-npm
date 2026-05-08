import React from 'react';

export interface MinaEightCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightCircle: React.FC<MinaEightCircleProps>;
export default MinaEightCircle;
