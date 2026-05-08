import React from 'react';

export interface MinaSevenHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenHexagon: React.FC<MinaSevenHexagonProps>;
export default MinaSevenHexagon;
