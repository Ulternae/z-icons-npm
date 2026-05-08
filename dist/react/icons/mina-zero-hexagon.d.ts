import React from 'react';

export interface MinaZeroHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroHexagon: React.FC<MinaZeroHexagonProps>;
export default MinaZeroHexagon;
