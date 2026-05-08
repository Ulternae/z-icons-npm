import React from 'react';

export interface MinaLetterBCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBCircleSolid: React.FC<MinaLetterBCircleSolidProps>;
export default MinaLetterBCircleSolid;
