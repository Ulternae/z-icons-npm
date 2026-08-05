import React from 'react';

export interface MinaAirConditionerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAirConditioner(props: MinaAirConditionerProps): React.ReactElement;
export default MinaAirConditioner;
