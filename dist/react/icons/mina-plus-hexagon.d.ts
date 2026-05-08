import React from 'react';

export interface MinaPlusHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusHexagon: React.FC<MinaPlusHexagonProps>;
export default MinaPlusHexagon;
