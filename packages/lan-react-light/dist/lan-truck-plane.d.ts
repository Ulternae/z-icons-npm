import React from 'react';

export interface LanTruckPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPlane(props: LanTruckPlaneProps): React.ReactElement;
export default LanTruckPlane;
