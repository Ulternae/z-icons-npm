import React from 'react';

export interface MinaSixHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixHexagon: React.FC<MinaSixHexagonProps>;
export default MinaSixHexagon;
