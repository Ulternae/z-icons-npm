import React from 'react';

export interface MinaLetterVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVSolid: React.FC<MinaLetterVSolidProps>;
export default MinaLetterVSolid;
