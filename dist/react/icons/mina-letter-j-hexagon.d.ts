import React from 'react';

export interface MinaLetterJHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJHexagon: React.FC<MinaLetterJHexagonProps>;
export default MinaLetterJHexagon;
