import React from 'react';

export interface LanWindsockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindsockSolid(props: LanWindsockSolidProps): React.ReactElement;
export default LanWindsockSolid;
