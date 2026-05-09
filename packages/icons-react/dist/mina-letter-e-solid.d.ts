import React from 'react';

export interface MinaLetterESolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterESolid: React.FC<MinaLetterESolidProps>;
export default MinaLetterESolid;
