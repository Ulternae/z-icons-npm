import React from 'react';

export interface LanHexagonNodesBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonNodesBoltSolid: React.FC<LanHexagonNodesBoltSolidProps>;
export default LanHexagonNodesBoltSolid;
