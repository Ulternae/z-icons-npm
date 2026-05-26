import React from 'react';

export interface LanHexagonCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonCheckThin: React.FC<LanHexagonCheckThinProps>;
export default LanHexagonCheckThin;
