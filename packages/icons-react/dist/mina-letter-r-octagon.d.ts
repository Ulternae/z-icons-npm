import React from 'react';

export interface MinaLetterROctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterROctagon: React.FC<MinaLetterROctagonProps>;
export default MinaLetterROctagon;
