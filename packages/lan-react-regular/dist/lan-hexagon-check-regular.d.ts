import React from 'react';

export interface LanHexagonCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonCheckRegular(props: LanHexagonCheckRegularProps): React.ReactElement;
export default LanHexagonCheckRegular;
