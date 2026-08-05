import React from 'react';

export interface LanCarBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBusSolid(props: LanCarBusSolidProps): React.ReactElement;
export default LanCarBusSolid;
