import React from 'react';

export interface LanHexagonNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonNodes(props: LanHexagonNodesProps): React.ReactElement;
export default LanHexagonNodes;
