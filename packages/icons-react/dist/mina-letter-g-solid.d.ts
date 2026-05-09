import React from 'react';

export interface MinaLetterGSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGSolid: React.FC<MinaLetterGSolidProps>;
export default MinaLetterGSolid;
