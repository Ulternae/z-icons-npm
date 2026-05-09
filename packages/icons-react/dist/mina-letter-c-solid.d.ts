import React from 'react';

export interface MinaLetterCSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCSolid: React.FC<MinaLetterCSolidProps>;
export default MinaLetterCSolid;
