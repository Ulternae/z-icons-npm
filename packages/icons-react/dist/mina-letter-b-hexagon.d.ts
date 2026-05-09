import React from 'react';

export interface MinaLetterBHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBHexagon: React.FC<MinaLetterBHexagonProps>;
export default MinaLetterBHexagon;
