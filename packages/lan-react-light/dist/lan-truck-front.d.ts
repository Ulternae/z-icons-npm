import React from 'react';

export interface LanTruckFrontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFront(props: LanTruckFrontProps): React.ReactElement;
export default LanTruckFront;
