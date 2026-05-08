import React from 'react';

export interface MinaHashCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashCircle: React.FC<MinaHashCircleProps>;
export default MinaHashCircle;
