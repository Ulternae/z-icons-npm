import React from 'react';

export interface MinaLetterHCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHCircleSolid: React.FC<MinaLetterHCircleSolidProps>;
export default MinaLetterHCircleSolid;
