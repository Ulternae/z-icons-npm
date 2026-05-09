import React from 'react';

export interface MinaLetterOHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOHexagon: React.FC<MinaLetterOHexagonProps>;
export default MinaLetterOHexagon;
