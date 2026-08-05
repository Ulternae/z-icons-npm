import React from 'react';

export interface LanTruckFrontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFrontThin(props: LanTruckFrontThinProps): React.ReactElement;
export default LanTruckFrontThin;
