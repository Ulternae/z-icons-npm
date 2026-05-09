import React from 'react';

export interface MinaStopHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopHexagon: React.FC<MinaStopHexagonProps>;
export default MinaStopHexagon;
