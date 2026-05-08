import React from 'react';

export interface MinaLetterZSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZSolid: React.FC<MinaLetterZSolidProps>;
export default MinaLetterZSolid;
