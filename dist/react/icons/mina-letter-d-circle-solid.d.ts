import React from 'react';

export interface MinaLetterDCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDCircleSolid: React.FC<MinaLetterDCircleSolidProps>;
export default MinaLetterDCircleSolid;
