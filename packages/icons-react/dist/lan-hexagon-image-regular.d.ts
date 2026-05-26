import React from 'react';

export interface LanHexagonImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonImageRegular: React.FC<LanHexagonImageRegularProps>;
export default LanHexagonImageRegular;
