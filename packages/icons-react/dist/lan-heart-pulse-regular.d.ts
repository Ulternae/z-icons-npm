import React from 'react';

export interface LanHeartPulseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartPulseRegular: React.FC<LanHeartPulseRegularProps>;
export default LanHeartPulseRegular;
