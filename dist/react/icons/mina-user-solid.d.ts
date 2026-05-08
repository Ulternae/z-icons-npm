import React from 'react';

export interface MinaUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserSolid: React.FC<MinaUserSolidProps>;
export default MinaUserSolid;
