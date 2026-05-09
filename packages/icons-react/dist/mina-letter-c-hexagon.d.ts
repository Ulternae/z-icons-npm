import React from 'react';

export interface MinaLetterCHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCHexagon: React.FC<MinaLetterCHexagonProps>;
export default MinaLetterCHexagon;
