import React from 'react';

export interface MinaLetterOCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOCircleSolid: React.FC<MinaLetterOCircleSolidProps>;
export default MinaLetterOCircleSolid;
