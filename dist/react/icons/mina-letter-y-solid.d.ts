import React from 'react';

export interface MinaLetterYSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYSolid: React.FC<MinaLetterYSolidProps>;
export default MinaLetterYSolid;
