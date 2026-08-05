import React from 'react';

export interface LanHexagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonThin(props: LanHexagonThinProps): React.ReactElement;
export default LanHexagonThin;
