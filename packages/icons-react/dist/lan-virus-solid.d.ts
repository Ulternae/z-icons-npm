import React from 'react';

export interface LanVirusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirusSolid: React.FC<LanVirusSolidProps>;
export default LanVirusSolid;
