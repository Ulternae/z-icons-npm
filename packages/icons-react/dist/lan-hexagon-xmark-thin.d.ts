import React from 'react';

export interface LanHexagonXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonXmarkThin: React.FC<LanHexagonXmarkThinProps>;
export default LanHexagonXmarkThin;
