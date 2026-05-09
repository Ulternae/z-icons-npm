import React from 'react';

export interface MinaNineHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineHexagon: React.FC<MinaNineHexagonProps>;
export default MinaNineHexagon;
