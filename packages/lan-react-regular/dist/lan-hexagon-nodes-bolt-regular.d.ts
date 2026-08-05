import React from 'react';

export interface LanHexagonNodesBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonNodesBoltRegular(props: LanHexagonNodesBoltRegularProps): React.ReactElement;
export default LanHexagonNodesBoltRegular;
