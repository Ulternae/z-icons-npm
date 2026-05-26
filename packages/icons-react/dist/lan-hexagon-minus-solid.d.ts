import React from 'react';

export interface LanHexagonMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonMinusSolid: React.FC<LanHexagonMinusSolidProps>;
export default LanHexagonMinusSolid;
