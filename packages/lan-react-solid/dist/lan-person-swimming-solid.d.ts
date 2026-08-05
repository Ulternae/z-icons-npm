import React from 'react';

export interface LanPersonSwimmingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSwimmingSolid(props: LanPersonSwimmingSolidProps): React.ReactElement;
export default LanPersonSwimmingSolid;
