import React from 'react';

export interface MinaLetterTCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTCircleSolid: React.FC<MinaLetterTCircleSolidProps>;
export default MinaLetterTCircleSolid;
