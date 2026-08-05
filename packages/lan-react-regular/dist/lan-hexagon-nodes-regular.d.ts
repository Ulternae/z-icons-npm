import React from 'react';

export interface LanHexagonNodesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonNodesRegular(props: LanHexagonNodesRegularProps): React.ReactElement;
export default LanHexagonNodesRegular;
