import React from 'react';

export interface MinaBitcoinHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinHexagon: React.FC<MinaBitcoinHexagonProps>;
export default MinaBitcoinHexagon;
