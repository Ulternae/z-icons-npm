import React from 'react';

export interface MinaAirConditionerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAirConditioner: React.FC<MinaAirConditionerProps>;
export default MinaAirConditioner;
