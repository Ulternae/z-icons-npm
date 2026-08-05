import React from 'react';

export interface LanTruckMovingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMovingRegular(props: LanTruckMovingRegularProps): React.ReactElement;
export default LanTruckMovingRegular;
