import React from 'react';

export interface MinaLetterXHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterXHexagon: React.FC<MinaLetterXHexagonProps>;
export default MinaLetterXHexagon;
