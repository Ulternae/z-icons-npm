import React from 'react';

export interface MinaLetterISolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterISolid: React.FC<MinaLetterISolidProps>;
export default MinaLetterISolid;
