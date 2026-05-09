import React from 'react';

export interface MinaLetterWSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWSolid: React.FC<MinaLetterWSolidProps>;
export default MinaLetterWSolid;
