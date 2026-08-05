import React from 'react';

export interface LanAirConditionerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirConditionerRegular(props: LanAirConditionerRegularProps): React.ReactElement;
export default LanAirConditionerRegular;
