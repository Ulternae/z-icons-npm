import React from 'react';

export interface MinaLetterKHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterKHexagon: React.FC<MinaLetterKHexagonProps>;
export default MinaLetterKHexagon;
