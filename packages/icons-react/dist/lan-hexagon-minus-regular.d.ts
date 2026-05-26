import React from 'react';

export interface LanHexagonMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonMinusRegular: React.FC<LanHexagonMinusRegularProps>;
export default LanHexagonMinusRegular;
