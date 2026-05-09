import React from 'react';

export interface MinaLetterPSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPSolid: React.FC<MinaLetterPSolidProps>;
export default MinaLetterPSolid;
