import React from 'react';

export interface MinaLetterPCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPCircleSolid: React.FC<MinaLetterPCircleSolidProps>;
export default MinaLetterPCircleSolid;
