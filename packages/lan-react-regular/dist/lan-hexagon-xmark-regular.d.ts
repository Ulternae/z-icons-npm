import React from 'react';

export interface LanHexagonXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonXmarkRegular(props: LanHexagonXmarkRegularProps): React.ReactElement;
export default LanHexagonXmarkRegular;
