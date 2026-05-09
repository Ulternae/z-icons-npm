import React from 'react';

export interface MinaHeartMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartMinus: React.FC<MinaHeartMinusProps>;
export default MinaHeartMinus;
