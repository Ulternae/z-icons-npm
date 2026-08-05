import React from 'react';

export interface LanHexagonCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonCheckSolid(props: LanHexagonCheckSolidProps): React.ReactElement;
export default LanHexagonCheckSolid;
