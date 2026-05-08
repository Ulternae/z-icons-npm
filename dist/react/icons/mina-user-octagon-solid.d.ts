import React from 'react';

export interface MinaUserOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserOctagonSolid: React.FC<MinaUserOctagonSolidProps>;
export default MinaUserOctagonSolid;
