import React from 'react';

export interface MinaDotsCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsCircle: React.FC<MinaDotsCircleProps>;
export default MinaDotsCircle;
