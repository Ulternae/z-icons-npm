import React from 'react';

export interface LanHexagonEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonEqualsThin(props: LanHexagonEqualsThinProps): React.ReactElement;
export default LanHexagonEqualsThin;
