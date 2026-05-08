import React from 'react';

export interface MinaLetterZHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZHexagon: React.FC<MinaLetterZHexagonProps>;
export default MinaLetterZHexagon;
