import React from 'react';

export interface MinaLocationMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationMinus: React.FC<MinaLocationMinusProps>;
export default MinaLocationMinus;
