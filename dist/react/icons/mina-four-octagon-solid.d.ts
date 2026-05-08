import React from 'react';

export interface MinaFourOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourOctagonSolid: React.FC<MinaFourOctagonSolidProps>;
export default MinaFourOctagonSolid;
