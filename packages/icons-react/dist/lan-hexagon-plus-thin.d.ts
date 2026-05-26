import React from 'react';

export interface LanHexagonPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonPlusThin: React.FC<LanHexagonPlusThinProps>;
export default LanHexagonPlusThin;
