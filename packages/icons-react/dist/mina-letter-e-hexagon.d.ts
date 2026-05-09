import React from 'react';

export interface MinaLetterEHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterEHexagon: React.FC<MinaLetterEHexagonProps>;
export default MinaLetterEHexagon;
