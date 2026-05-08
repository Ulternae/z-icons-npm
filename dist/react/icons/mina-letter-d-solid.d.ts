import React from 'react';

export interface MinaLetterDSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDSolid: React.FC<MinaLetterDSolidProps>;
export default MinaLetterDSolid;
