import React from 'react';

export interface LanMeterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterRegular: React.FC<LanMeterRegularProps>;
export default LanMeterRegular;
