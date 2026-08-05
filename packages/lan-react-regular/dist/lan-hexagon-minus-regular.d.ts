import React from 'react';

export interface LanHexagonMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonMinusRegular(props: LanHexagonMinusRegularProps): React.ReactElement;
export default LanHexagonMinusRegular;
