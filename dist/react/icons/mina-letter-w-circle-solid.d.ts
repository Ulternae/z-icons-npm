import React from 'react';

export interface MinaLetterWCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWCircleSolid: React.FC<MinaLetterWCircleSolidProps>;
export default MinaLetterWCircleSolid;
