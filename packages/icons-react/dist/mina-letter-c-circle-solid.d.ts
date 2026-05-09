import React from 'react';

export interface MinaLetterCCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCCircleSolid: React.FC<MinaLetterCCircleSolidProps>;
export default MinaLetterCCircleSolid;
