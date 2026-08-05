import React from 'react';

export interface LanTransmissionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransmissionSolid(props: LanTransmissionSolidProps): React.ReactElement;
export default LanTransmissionSolid;
