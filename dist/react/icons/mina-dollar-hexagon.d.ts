import React from 'react';

export interface MinaDollarHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarHexagon: React.FC<MinaDollarHexagonProps>;
export default MinaDollarHexagon;
