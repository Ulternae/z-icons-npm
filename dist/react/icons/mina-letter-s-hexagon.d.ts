import React from 'react';

export interface MinaLetterSHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSHexagon: React.FC<MinaLetterSHexagonProps>;
export default MinaLetterSHexagon;
