import React from 'react';

export interface MinaYenHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenHexagon: React.FC<MinaYenHexagonProps>;
export default MinaYenHexagon;
