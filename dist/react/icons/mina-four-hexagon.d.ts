import React from 'react';

export interface MinaFourHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourHexagon: React.FC<MinaFourHexagonProps>;
export default MinaFourHexagon;
