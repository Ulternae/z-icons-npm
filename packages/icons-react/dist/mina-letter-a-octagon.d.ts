import React from 'react';

export interface MinaLetterAOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterAOctagon: React.FC<MinaLetterAOctagonProps>;
export default MinaLetterAOctagon;
