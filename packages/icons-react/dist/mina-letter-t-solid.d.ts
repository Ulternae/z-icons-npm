import React from 'react';

export interface MinaLetterTSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTSolid: React.FC<MinaLetterTSolidProps>;
export default MinaLetterTSolid;
