import React from 'react';

export interface LanTruckMovingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMoving(props: LanTruckMovingProps): React.ReactElement;
export default LanTruckMoving;
