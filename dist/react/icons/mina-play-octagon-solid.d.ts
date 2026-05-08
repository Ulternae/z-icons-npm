import React from 'react';

export interface MinaPlayOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayOctagonSolid: React.FC<MinaPlayOctagonSolidProps>;
export default MinaPlayOctagonSolid;
