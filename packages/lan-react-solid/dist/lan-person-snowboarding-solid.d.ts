import React from 'react';

export interface LanPersonSnowboardingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSnowboardingSolid(props: LanPersonSnowboardingSolidProps): React.ReactElement;
export default LanPersonSnowboardingSolid;
