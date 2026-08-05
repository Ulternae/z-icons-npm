import React from 'react';

export interface MinaAirConditionerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAirConditionerSolid(props: MinaAirConditionerSolidProps): React.ReactElement;
export default MinaAirConditionerSolid;
