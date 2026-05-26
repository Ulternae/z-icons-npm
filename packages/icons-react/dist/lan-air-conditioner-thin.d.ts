import React from 'react';

export interface LanAirConditionerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirConditionerThin: React.FC<LanAirConditionerThinProps>;
export default LanAirConditionerThin;
