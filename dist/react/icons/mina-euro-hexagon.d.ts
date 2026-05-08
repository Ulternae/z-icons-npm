import React from 'react';

export interface MinaEuroHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroHexagon: React.FC<MinaEuroHexagonProps>;
export default MinaEuroHexagon;
