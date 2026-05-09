import React from 'react';

export interface MinaLetterPHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPHexagon: React.FC<MinaLetterPHexagonProps>;
export default MinaLetterPHexagon;
