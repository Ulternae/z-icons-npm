import React from 'react';

export interface LanHexagonCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonCheckThin(props: LanHexagonCheckThinProps): React.ReactElement;
export default LanHexagonCheckThin;
