import React from 'react';

export interface MinaLetterYHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYHexagon: React.FC<MinaLetterYHexagonProps>;
export default MinaLetterYHexagon;
