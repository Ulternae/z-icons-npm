import React from 'react';

export interface LanHexagonEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonEqualsThin: React.FC<LanHexagonEqualsThinProps>;
export default LanHexagonEqualsThin;
