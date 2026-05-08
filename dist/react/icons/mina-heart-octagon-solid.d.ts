import React from 'react';

export interface MinaHeartOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartOctagonSolid: React.FC<MinaHeartOctagonSolidProps>;
export default MinaHeartOctagonSolid;
