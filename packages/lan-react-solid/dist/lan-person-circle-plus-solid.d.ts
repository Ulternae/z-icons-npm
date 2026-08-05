import React from 'react';

export interface LanPersonCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCirclePlusSolid(props: LanPersonCirclePlusSolidProps): React.ReactElement;
export default LanPersonCirclePlusSolid;
