import React from 'react';

export interface MinaLetterQSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQSolid: React.FC<MinaLetterQSolidProps>;
export default MinaLetterQSolid;
