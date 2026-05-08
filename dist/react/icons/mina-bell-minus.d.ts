import React from 'react';

export interface MinaBellMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellMinus: React.FC<MinaBellMinusProps>;
export default MinaBellMinus;
