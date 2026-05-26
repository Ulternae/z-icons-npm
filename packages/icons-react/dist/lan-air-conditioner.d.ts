import React from 'react';

export interface LanAirConditionerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirConditioner: React.FC<LanAirConditionerProps>;
export default LanAirConditioner;
