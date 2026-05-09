import React from 'react';

export interface MinaForwardHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardHexagon: React.FC<MinaForwardHexagonProps>;
export default MinaForwardHexagon;
