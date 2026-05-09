import React from 'react';

export interface MinaDotsVerticalHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalHexagon: React.FC<MinaDotsVerticalHexagonProps>;
export default MinaDotsVerticalHexagon;
