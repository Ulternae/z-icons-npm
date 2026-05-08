import React from 'react';

export interface MinaLetterMProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterM: React.FC<MinaLetterMProps>;
export default MinaLetterM;
