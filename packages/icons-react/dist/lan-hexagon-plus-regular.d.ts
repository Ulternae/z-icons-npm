import React from 'react';

export interface LanHexagonPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonPlusRegular: React.FC<LanHexagonPlusRegularProps>;
export default LanHexagonPlusRegular;
