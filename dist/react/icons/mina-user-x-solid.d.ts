import React from 'react';

export interface MinaUserXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserXSolid: React.FC<MinaUserXSolidProps>;
export default MinaUserXSolid;
