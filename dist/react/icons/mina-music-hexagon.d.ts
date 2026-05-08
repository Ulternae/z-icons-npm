import React from 'react';

export interface MinaMusicHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicHexagon: React.FC<MinaMusicHexagonProps>;
export default MinaMusicHexagon;
