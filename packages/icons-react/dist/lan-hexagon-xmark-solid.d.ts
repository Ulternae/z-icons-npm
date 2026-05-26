import React from 'react';

export interface LanHexagonXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonXmarkSolid: React.FC<LanHexagonXmarkSolidProps>;
export default LanHexagonXmarkSolid;
