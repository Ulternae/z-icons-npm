import React from 'react';

export interface MinaLetterLSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLSolid: React.FC<MinaLetterLSolidProps>;
export default MinaLetterLSolid;
