import React from 'react';

export interface LanPersonSkiingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSkiingSolid(props: LanPersonSkiingSolidProps): React.ReactElement;
export default LanPersonSkiingSolid;
