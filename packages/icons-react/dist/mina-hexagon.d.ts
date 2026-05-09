import React from 'react';

export interface MinaHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHexagon: React.FC<MinaHexagonProps>;
export default MinaHexagon;
