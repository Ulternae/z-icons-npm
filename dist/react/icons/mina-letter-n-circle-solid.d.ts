import React from 'react';

export interface MinaLetterNCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNCircleSolid: React.FC<MinaLetterNCircleSolidProps>;
export default MinaLetterNCircleSolid;
