import React from 'react';

export interface LanTransmissionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransmissionRegular(props: LanTransmissionRegularProps): React.ReactElement;
export default LanTransmissionRegular;
