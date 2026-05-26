import React from 'react';

export interface LanWashingMachineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWashingMachineSolid: React.FC<LanWashingMachineSolidProps>;
export default LanWashingMachineSolid;
