import React from 'react';

export interface LanHexagonCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonCheck(props: LanHexagonCheckProps): React.ReactElement;
export default LanHexagonCheck;
