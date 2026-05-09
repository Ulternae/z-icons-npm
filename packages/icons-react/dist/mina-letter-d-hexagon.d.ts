import React from 'react';

export interface MinaLetterDHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDHexagon: React.FC<MinaLetterDHexagonProps>;
export default MinaLetterDHexagon;
