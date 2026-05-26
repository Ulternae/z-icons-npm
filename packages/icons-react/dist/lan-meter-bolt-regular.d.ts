import React from 'react';

export interface LanMeterBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterBoltRegular: React.FC<LanMeterBoltRegularProps>;
export default LanMeterBoltRegular;
