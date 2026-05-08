import React from 'react';

export interface MinaLetterFHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFHexagon: React.FC<MinaLetterFHexagonProps>;
export default MinaLetterFHexagon;
