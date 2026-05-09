import React from 'react';

export interface MinaInfinityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfinity: React.FC<MinaInfinityProps>;
export default MinaInfinity;
