import React from 'react';

export interface LanHexagonMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonMinusThin(props: LanHexagonMinusThinProps): React.ReactElement;
export default LanHexagonMinusThin;
