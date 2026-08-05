import React from 'react';

export interface LanTruckBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckBoltRegular(props: LanTruckBoltRegularProps): React.ReactElement;
export default LanTruckBoltRegular;
