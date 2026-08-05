import React from 'react';

export interface LanPersonHikingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonHikingSolid(props: LanPersonHikingSolidProps): React.ReactElement;
export default LanPersonHikingSolid;
