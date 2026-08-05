import React from 'react';

export interface LanCactusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCactusSolid(props: LanCactusSolidProps): React.ReactElement;
export default LanCactusSolid;
