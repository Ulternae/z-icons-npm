import React from 'react';

export interface MinaLetterUSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUSolid: React.FC<MinaLetterUSolidProps>;
export default MinaLetterUSolid;
