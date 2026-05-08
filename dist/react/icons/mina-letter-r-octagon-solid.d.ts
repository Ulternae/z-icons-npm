import React from 'react';

export interface MinaLetterROctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterROctagonSolid: React.FC<MinaLetterROctagonSolidProps>;
export default MinaLetterROctagonSolid;
