import React from 'react';

export interface MinaPauseHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseHexagon: React.FC<MinaPauseHexagonProps>;
export default MinaPauseHexagon;
