import React from 'react';

export interface MinaFiveHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveHexagon: React.FC<MinaFiveHexagonProps>;
export default MinaFiveHexagon;
