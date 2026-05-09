import React from 'react';

export interface MinaLetterGCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGCircleSolid: React.FC<MinaLetterGCircleSolidProps>;
export default MinaLetterGCircleSolid;
