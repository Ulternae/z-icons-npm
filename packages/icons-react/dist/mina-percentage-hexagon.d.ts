import React from 'react';

export interface MinaPercentageHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageHexagon: React.FC<MinaPercentageHexagonProps>;
export default MinaPercentageHexagon;
