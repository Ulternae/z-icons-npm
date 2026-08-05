import React from 'react';

export interface LanFileCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCirclePlusSolid(props: LanFileCirclePlusSolidProps): React.ReactElement;
export default LanFileCirclePlusSolid;
