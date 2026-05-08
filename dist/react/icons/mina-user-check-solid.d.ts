import React from 'react';

export interface MinaUserCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserCheckSolid: React.FC<MinaUserCheckSolidProps>;
export default MinaUserCheckSolid;
