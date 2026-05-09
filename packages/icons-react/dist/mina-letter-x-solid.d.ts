import React from 'react';

export interface MinaLetterXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterXSolid: React.FC<MinaLetterXSolidProps>;
export default MinaLetterXSolid;
