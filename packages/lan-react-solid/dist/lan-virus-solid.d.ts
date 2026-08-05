import React from 'react';

export interface LanVirusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirusSolid(props: LanVirusSolidProps): React.ReactElement;
export default LanVirusSolid;
