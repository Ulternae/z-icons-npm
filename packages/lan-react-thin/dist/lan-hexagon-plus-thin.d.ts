import React from 'react';

export interface LanHexagonPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonPlusThin(props: LanHexagonPlusThinProps): React.ReactElement;
export default LanHexagonPlusThin;
