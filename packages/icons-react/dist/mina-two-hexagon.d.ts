import React from 'react';

export interface MinaTwoHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoHexagon: React.FC<MinaTwoHexagonProps>;
export default MinaTwoHexagon;
