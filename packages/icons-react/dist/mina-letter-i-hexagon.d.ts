import React from 'react';

export interface MinaLetterIHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterIHexagon: React.FC<MinaLetterIHexagonProps>;
export default MinaLetterIHexagon;
