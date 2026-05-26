import React from 'react';

export interface LanHexagonNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonNodesSolid: React.FC<LanHexagonNodesSolidProps>;
export default LanHexagonNodesSolid;
