import React from 'react';

export interface MinaRupeeHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeHexagon: React.FC<MinaRupeeHexagonProps>;
export default MinaRupeeHexagon;
