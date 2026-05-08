import React from 'react';

export interface MinaLetterAHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterAHexagon: React.FC<MinaLetterAHexagonProps>;
export default MinaLetterAHexagon;
