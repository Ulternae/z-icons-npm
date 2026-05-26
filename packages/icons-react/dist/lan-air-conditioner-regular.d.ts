import React from 'react';

export interface LanAirConditionerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirConditionerRegular: React.FC<LanAirConditionerRegularProps>;
export default LanAirConditionerRegular;
