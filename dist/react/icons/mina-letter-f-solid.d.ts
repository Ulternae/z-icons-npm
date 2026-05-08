import React from 'react';

export interface MinaLetterFSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFSolid: React.FC<MinaLetterFSolidProps>;
export default MinaLetterFSolid;
