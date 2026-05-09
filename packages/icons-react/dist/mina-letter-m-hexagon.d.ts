import React from 'react';

export interface MinaLetterMHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMHexagon: React.FC<MinaLetterMHexagonProps>;
export default MinaLetterMHexagon;
