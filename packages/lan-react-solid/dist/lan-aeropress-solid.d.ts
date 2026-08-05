import React from 'react';

export interface LanAeropressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAeropressSolid(props: LanAeropressSolidProps): React.ReactElement;
export default LanAeropressSolid;
