import React from 'react';

export interface MinaLetterLHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLHexagon: React.FC<MinaLetterLHexagonProps>;
export default MinaLetterLHexagon;
