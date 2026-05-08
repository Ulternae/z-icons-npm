import React from 'react';

export interface MinaCodeHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeHexagon: React.FC<MinaCodeHexagonProps>;
export default MinaCodeHexagon;
