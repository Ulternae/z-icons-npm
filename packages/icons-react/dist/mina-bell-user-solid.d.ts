import React from 'react';

export interface MinaBellUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellUserSolid: React.FC<MinaBellUserSolidProps>;
export default MinaBellUserSolid;
