import React from 'react';

export interface LanTruckPlowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPlowRegular(props: LanTruckPlowRegularProps): React.ReactElement;
export default LanTruckPlowRegular;
