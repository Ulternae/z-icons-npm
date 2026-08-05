import React from 'react';

export interface LanAirConditionerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirConditionerSolid(props: LanAirConditionerSolidProps): React.ReactElement;
export default LanAirConditionerSolid;
