import React from 'react';

export interface LanHexagonNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonNodes: React.FC<LanHexagonNodesProps>;
export default LanHexagonNodes;
