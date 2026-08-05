import React from 'react';

export interface LanAirConditionerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirConditioner(props: LanAirConditionerProps): React.ReactElement;
export default LanAirConditioner;
