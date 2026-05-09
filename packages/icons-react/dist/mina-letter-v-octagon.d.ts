import React from 'react';

export interface MinaLetterVOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVOctagon: React.FC<MinaLetterVOctagonProps>;
export default MinaLetterVOctagon;
