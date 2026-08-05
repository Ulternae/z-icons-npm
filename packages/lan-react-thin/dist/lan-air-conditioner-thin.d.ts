import React from 'react';

export interface LanAirConditionerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirConditionerThin(props: LanAirConditionerThinProps): React.ReactElement;
export default LanAirConditionerThin;
