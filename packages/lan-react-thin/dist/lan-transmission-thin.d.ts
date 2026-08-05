import React from 'react';

export interface LanTransmissionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransmissionThin(props: LanTransmissionThinProps): React.ReactElement;
export default LanTransmissionThin;
