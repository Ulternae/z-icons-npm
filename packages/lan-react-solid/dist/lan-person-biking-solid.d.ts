import React from 'react';

export interface LanPersonBikingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBikingSolid(props: LanPersonBikingSolidProps): React.ReactElement;
export default LanPersonBikingSolid;
