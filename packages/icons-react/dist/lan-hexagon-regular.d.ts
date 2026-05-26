import React from 'react';

export interface LanHexagonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonRegular: React.FC<LanHexagonRegularProps>;
export default LanHexagonRegular;
