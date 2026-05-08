import React from 'react';

export interface MinaLetterIProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterI: React.FC<MinaLetterIProps>;
export default MinaLetterI;
