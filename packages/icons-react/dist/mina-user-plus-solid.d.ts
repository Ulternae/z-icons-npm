import React from 'react';

export interface MinaUserPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserPlusSolid: React.FC<MinaUserPlusSolidProps>;
export default MinaUserPlusSolid;
