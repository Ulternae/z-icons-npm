import React from 'react';

export interface MinaLetterPOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPOctagon: React.FC<MinaLetterPOctagonProps>;
export default MinaLetterPOctagon;
