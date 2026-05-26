import React from 'react';

export interface LanAirConditionerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirConditionerSolid: React.FC<LanAirConditionerSolidProps>;
export default LanAirConditionerSolid;
