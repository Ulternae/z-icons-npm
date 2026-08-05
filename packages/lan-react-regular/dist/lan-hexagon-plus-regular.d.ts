import React from 'react';

export interface LanHexagonPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonPlusRegular(props: LanHexagonPlusRegularProps): React.ReactElement;
export default LanHexagonPlusRegular;
