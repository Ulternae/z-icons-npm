import React from 'react';

export interface LanPersonDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDressSolid(props: LanPersonDressSolidProps): React.ReactElement;
export default LanPersonDressSolid;
