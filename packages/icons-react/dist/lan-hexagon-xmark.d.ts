import React from 'react';

export interface LanHexagonXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonXmark: React.FC<LanHexagonXmarkProps>;
export default LanHexagonXmark;
