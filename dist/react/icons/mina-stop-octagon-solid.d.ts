import React from 'react';

export interface MinaStopOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopOctagonSolid: React.FC<MinaStopOctagonSolidProps>;
export default MinaStopOctagonSolid;
