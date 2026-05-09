import React from 'react';

export interface MinaLetterWHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWHexagon: React.FC<MinaLetterWHexagonProps>;
export default MinaLetterWHexagon;
