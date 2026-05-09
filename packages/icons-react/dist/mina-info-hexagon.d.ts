import React from 'react';

export interface MinaInfoHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoHexagon: React.FC<MinaInfoHexagonProps>;
export default MinaInfoHexagon;
