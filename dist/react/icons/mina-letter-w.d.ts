import React from 'react';

export interface MinaLetterWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterW: React.FC<MinaLetterWProps>;
export default MinaLetterW;
