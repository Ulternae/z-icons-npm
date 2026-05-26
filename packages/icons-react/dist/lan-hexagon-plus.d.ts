import React from 'react';

export interface LanHexagonPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonPlus: React.FC<LanHexagonPlusProps>;
export default LanHexagonPlus;
