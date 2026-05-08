import React from 'react';

export interface MinaLetterUHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUHexagon: React.FC<MinaLetterUHexagonProps>;
export default MinaLetterUHexagon;
