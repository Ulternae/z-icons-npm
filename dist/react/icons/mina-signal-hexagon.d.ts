import React from 'react';

export interface MinaSignalHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalHexagon: React.FC<MinaSignalHexagonProps>;
export default MinaSignalHexagon;
