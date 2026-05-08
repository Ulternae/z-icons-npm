import React from 'react';

export interface MinaLetterTHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTHexagon: React.FC<MinaLetterTHexagonProps>;
export default MinaLetterTHexagon;
