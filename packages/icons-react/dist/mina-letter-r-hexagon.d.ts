import React from 'react';

export interface MinaLetterRHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRHexagon: React.FC<MinaLetterRHexagonProps>;
export default MinaLetterRHexagon;
