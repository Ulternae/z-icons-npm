import React from 'react';

export interface LanTrafficLightGoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightGo: React.FC<LanTrafficLightGoProps>;
export default LanTrafficLightGo;
