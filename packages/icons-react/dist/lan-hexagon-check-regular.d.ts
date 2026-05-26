import React from 'react';

export interface LanHexagonCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonCheckRegular: React.FC<LanHexagonCheckRegularProps>;
export default LanHexagonCheckRegular;
