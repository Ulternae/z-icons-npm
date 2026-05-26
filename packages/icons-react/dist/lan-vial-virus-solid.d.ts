import React from 'react';

export interface LanVialVirusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialVirusSolid: React.FC<LanVialVirusSolidProps>;
export default LanVialVirusSolid;
