import React from 'react';

export interface LanHexagonMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonMinus: React.FC<LanHexagonMinusProps>;
export default LanHexagonMinus;
