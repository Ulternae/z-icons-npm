import React from 'react';

export interface MinaPauseOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseOctagonSolid: React.FC<MinaPauseOctagonSolidProps>;
export default MinaPauseOctagonSolid;
