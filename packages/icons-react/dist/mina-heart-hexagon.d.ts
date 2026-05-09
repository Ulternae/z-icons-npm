import React from 'react';

export interface MinaHeartHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartHexagon: React.FC<MinaHeartHexagonProps>;
export default MinaHeartHexagon;
