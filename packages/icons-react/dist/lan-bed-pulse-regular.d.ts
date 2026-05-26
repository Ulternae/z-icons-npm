import React from 'react';

export interface LanBedPulseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedPulseRegular: React.FC<LanBedPulseRegularProps>;
export default LanBedPulseRegular;
