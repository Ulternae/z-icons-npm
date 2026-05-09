import React from 'react';

export interface MinaLetterUOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUOctagon: React.FC<MinaLetterUOctagonProps>;
export default MinaLetterUOctagon;
