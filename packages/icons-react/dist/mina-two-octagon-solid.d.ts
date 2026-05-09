import React from 'react';

export interface MinaTwoOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoOctagonSolid: React.FC<MinaTwoOctagonSolidProps>;
export default MinaTwoOctagonSolid;
