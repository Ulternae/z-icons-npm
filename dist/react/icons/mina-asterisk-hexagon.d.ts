import React from 'react';

export interface MinaAsteriskHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskHexagon: React.FC<MinaAsteriskHexagonProps>;
export default MinaAsteriskHexagon;
