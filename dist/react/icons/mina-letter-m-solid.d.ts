import React from 'react';

export interface MinaLetterMSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMSolid: React.FC<MinaLetterMSolidProps>;
export default MinaLetterMSolid;
