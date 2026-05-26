import React from 'react';

export interface LanBedPulseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedPulse: React.FC<LanBedPulseProps>;
export default LanBedPulse;
