import React from 'react';

export interface LanHexagonEqualsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonEqualsRegular(props: LanHexagonEqualsRegularProps): React.ReactElement;
export default LanHexagonEqualsRegular;
