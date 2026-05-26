import React from 'react';

export interface LanMeterBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterBoltThin: React.FC<LanMeterBoltThinProps>;
export default LanMeterBoltThin;
