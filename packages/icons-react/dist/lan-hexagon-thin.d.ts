import React from 'react';

export interface LanHexagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonThin: React.FC<LanHexagonThinProps>;
export default LanHexagonThin;
