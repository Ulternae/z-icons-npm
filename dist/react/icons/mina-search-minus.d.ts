import React from 'react';

export interface MinaSearchMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchMinus: React.FC<MinaSearchMinusProps>;
export default MinaSearchMinus;
