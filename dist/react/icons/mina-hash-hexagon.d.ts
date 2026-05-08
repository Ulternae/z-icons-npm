import React from 'react';

export interface MinaHashHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashHexagon: React.FC<MinaHashHexagonProps>;
export default MinaHashHexagon;
