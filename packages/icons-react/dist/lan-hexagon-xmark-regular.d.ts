import React from 'react';

export interface LanHexagonXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonXmarkRegular: React.FC<LanHexagonXmarkRegularProps>;
export default LanHexagonXmarkRegular;
