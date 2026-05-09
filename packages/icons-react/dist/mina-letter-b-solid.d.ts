import React from 'react';

export interface MinaLetterBSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBSolid: React.FC<MinaLetterBSolidProps>;
export default MinaLetterBSolid;
