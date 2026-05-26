import React from 'react';

export interface LanSquareVirusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareVirusSolid: React.FC<LanSquareVirusSolidProps>;
export default LanSquareVirusSolid;
