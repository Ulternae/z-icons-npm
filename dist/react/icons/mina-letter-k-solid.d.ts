import React from 'react';

export interface MinaLetterKSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterKSolid: React.FC<MinaLetterKSolidProps>;
export default MinaLetterKSolid;
