import React from 'react';

export interface MinaLetterSSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSSolid: React.FC<MinaLetterSSolidProps>;
export default MinaLetterSSolid;
