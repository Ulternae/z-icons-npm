import React from 'react';

export interface MinaLetterJSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJSolid: React.FC<MinaLetterJSolidProps>;
export default MinaLetterJSolid;
