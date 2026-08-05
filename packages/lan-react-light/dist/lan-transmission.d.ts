import React from 'react';

export interface LanTransmissionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransmission(props: LanTransmissionProps): React.ReactElement;
export default LanTransmission;
