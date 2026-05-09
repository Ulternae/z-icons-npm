import React from 'react';

export interface MinaLetterAOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterAOctagonSolid: React.FC<MinaLetterAOctagonSolidProps>;
export default MinaLetterAOctagonSolid;
