import React from 'react';

export interface MinaOneHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneHexagon: React.FC<MinaOneHexagonProps>;
export default MinaOneHexagon;
