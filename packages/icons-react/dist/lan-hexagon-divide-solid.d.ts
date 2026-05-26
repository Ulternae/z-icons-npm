import React from 'react';

export interface LanHexagonDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonDivideSolid: React.FC<LanHexagonDivideSolidProps>;
export default LanHexagonDivideSolid;
