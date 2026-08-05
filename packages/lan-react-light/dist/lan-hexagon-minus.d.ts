import React from 'react';

export interface LanHexagonMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonMinus(props: LanHexagonMinusProps): React.ReactElement;
export default LanHexagonMinus;
