import React from 'react';

export interface LanHexagonEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonEquals: React.FC<LanHexagonEqualsProps>;
export default LanHexagonEquals;
