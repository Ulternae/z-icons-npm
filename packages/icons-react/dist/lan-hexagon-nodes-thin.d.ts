import React from 'react';

export interface LanHexagonNodesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonNodesThin: React.FC<LanHexagonNodesThinProps>;
export default LanHexagonNodesThin;
