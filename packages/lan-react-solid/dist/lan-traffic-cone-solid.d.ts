import React from 'react';

export interface LanTrafficConeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficConeSolid(props: LanTrafficConeSolidProps): React.ReactElement;
export default LanTrafficConeSolid;
