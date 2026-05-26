import React from 'react';

export interface LanTransmissionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransmissionRegular: React.FC<LanTransmissionRegularProps>;
export default LanTransmissionRegular;
