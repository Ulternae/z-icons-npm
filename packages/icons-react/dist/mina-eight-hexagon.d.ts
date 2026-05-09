import React from 'react';

export interface MinaEightHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightHexagon: React.FC<MinaEightHexagonProps>;
export default MinaEightHexagon;
