import React from 'react';

export interface MinaLetterVHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVHexagon: React.FC<MinaLetterVHexagonProps>;
export default MinaLetterVHexagon;
