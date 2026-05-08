import React from 'react';

export interface MinaAirConditionerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAirConditionerSolid: React.FC<MinaAirConditionerSolidProps>;
export default MinaAirConditionerSolid;
