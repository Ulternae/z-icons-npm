import React from 'react';

export interface MinaLetterXCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterXCircleSolid: React.FC<MinaLetterXCircleSolidProps>;
export default MinaLetterXCircleSolid;
