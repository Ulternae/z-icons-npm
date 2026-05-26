import React from 'react';

export interface LanHexagonEqualsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonEqualsRegular: React.FC<LanHexagonEqualsRegularProps>;
export default LanHexagonEqualsRegular;
