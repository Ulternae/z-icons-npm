import React from 'react';

export interface MinaUsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUsersSolid: React.FC<MinaUsersSolidProps>;
export default MinaUsersSolid;
