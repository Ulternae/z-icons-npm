import React from 'react';

export interface MinaLetterVOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVOctagonSolid: React.FC<MinaLetterVOctagonSolidProps>;
export default MinaLetterVOctagonSolid;
