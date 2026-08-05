import React from 'react';

export interface LanDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDressSolid(props: LanDressSolidProps): React.ReactElement;
export default LanDressSolid;
