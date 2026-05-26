import React from 'react';

export interface LanHexagonCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonCheck: React.FC<LanHexagonCheckProps>;
export default LanHexagonCheck;
