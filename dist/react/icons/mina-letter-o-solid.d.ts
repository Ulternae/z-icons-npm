import React from 'react';

export interface MinaLetterOSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOSolid: React.FC<MinaLetterOSolidProps>;
export default MinaLetterOSolid;
