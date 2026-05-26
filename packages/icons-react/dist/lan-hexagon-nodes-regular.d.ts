import React from 'react';

export interface LanHexagonNodesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonNodesRegular: React.FC<LanHexagonNodesRegularProps>;
export default LanHexagonNodesRegular;
