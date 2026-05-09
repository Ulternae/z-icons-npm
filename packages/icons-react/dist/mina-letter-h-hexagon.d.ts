import React from 'react';

export interface MinaLetterHHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHHexagon: React.FC<MinaLetterHHexagonProps>;
export default MinaLetterHHexagon;
