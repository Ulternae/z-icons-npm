import React from 'react';

export interface LanTransmissionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransmission: React.FC<LanTransmissionProps>;
export default LanTransmission;
