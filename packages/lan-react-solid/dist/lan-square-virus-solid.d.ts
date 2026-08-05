import React from 'react';

export interface LanSquareVirusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareVirusSolid(props: LanSquareVirusSolidProps): React.ReactElement;
export default LanSquareVirusSolid;
