import React from 'react';

export interface MinaMinusHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusHexagon: React.FC<MinaMinusHexagonProps>;
export default MinaMinusHexagon;
