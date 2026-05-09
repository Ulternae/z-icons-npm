import React from 'react';

export interface MinaMusicOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicOctagonSolid: React.FC<MinaMusicOctagonSolidProps>;
export default MinaMusicOctagonSolid;
