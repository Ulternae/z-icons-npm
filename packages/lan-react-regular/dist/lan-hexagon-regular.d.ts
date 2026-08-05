import React from 'react';

export interface LanHexagonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonRegular(props: LanHexagonRegularProps): React.ReactElement;
export default LanHexagonRegular;
