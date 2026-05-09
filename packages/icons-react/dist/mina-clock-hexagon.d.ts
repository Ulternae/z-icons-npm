import React from 'react';

export interface MinaClockHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockHexagon: React.FC<MinaClockHexagonProps>;
export default MinaClockHexagon;
