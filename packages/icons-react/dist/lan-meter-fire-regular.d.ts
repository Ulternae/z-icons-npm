import React from 'react';

export interface LanMeterFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterFireRegular: React.FC<LanMeterFireRegularProps>;
export default LanMeterFireRegular;
