import React from 'react';

export interface LanVialVirusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialVirusSolid(props: LanVialVirusSolidProps): React.ReactElement;
export default LanVialVirusSolid;
