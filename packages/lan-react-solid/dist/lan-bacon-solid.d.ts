import React from 'react';

export interface LanBaconSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaconSolid(props: LanBaconSolidProps): React.ReactElement;
export default LanBaconSolid;
