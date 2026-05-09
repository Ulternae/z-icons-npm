import React from 'react';

export interface MinaUserCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserCircleSolid: React.FC<MinaUserCircleSolidProps>;
export default MinaUserCircleSolid;
