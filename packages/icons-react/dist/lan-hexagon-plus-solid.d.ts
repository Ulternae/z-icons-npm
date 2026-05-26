import React from 'react';

export interface LanHexagonPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonPlusSolid: React.FC<LanHexagonPlusSolidProps>;
export default LanHexagonPlusSolid;
