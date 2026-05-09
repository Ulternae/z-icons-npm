import React from 'react';

export interface MinaPlayHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayHexagon: React.FC<MinaPlayHexagonProps>;
export default MinaPlayHexagon;
