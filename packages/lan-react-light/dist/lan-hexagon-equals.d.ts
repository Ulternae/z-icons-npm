import React from 'react';

export interface LanHexagonEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonEquals(props: LanHexagonEqualsProps): React.ReactElement;
export default LanHexagonEquals;
