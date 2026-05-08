import React from 'react';

export interface MinaThreeOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeOctagonSolid: React.FC<MinaThreeOctagonSolidProps>;
export default MinaThreeOctagonSolid;
