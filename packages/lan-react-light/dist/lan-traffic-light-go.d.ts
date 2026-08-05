import React from 'react';

export interface LanTrafficLightGoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightGo(props: LanTrafficLightGoProps): React.ReactElement;
export default LanTrafficLightGo;
