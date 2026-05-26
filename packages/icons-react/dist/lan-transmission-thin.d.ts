import React from 'react';

export interface LanTransmissionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransmissionThin: React.FC<LanTransmissionThinProps>;
export default LanTransmissionThin;
