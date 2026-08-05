import React from 'react';

export interface LanHexagonNodesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonNodesThin(props: LanHexagonNodesThinProps): React.ReactElement;
export default LanHexagonNodesThin;
