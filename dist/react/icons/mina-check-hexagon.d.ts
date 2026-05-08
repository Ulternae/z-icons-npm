import React from 'react';

export interface MinaCheckHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckHexagon: React.FC<MinaCheckHexagonProps>;
export default MinaCheckHexagon;
