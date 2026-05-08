import React from 'react';

export interface MinaLetterACircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterACircleSolid: React.FC<MinaLetterACircleSolidProps>;
export default MinaLetterACircleSolid;
