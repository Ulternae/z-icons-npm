import React from 'react';

export interface LanTruckMovingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMovingSolid(props: LanTruckMovingSolidProps): React.ReactElement;
export default LanTruckMovingSolid;
