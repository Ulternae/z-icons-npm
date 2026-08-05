import React from 'react';

export interface LanHexagonImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonImageRegular(props: LanHexagonImageRegularProps): React.ReactElement;
export default LanHexagonImageRegular;
