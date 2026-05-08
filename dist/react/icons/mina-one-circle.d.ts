import React from 'react';

export interface MinaOneCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneCircle: React.FC<MinaOneCircleProps>;
export default MinaOneCircle;
