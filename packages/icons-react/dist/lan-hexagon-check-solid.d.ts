import React from 'react';

export interface LanHexagonCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonCheckSolid: React.FC<LanHexagonCheckSolidProps>;
export default LanHexagonCheckSolid;
