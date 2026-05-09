import React from 'react';

export interface MinaXHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXHexagon: React.FC<MinaXHexagonProps>;
export default MinaXHexagon;
