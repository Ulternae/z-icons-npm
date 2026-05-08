import React from 'react';

export interface MinaLetterQHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQHexagon: React.FC<MinaLetterQHexagonProps>;
export default MinaLetterQHexagon;
