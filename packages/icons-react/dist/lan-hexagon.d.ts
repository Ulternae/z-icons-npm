import React from 'react';

export interface LanHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagon: React.FC<LanHexagonProps>;
export default LanHexagon;
