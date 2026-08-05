import React from 'react';

export interface LanWashingMachineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWashingMachineSolid(props: LanWashingMachineSolidProps): React.ReactElement;
export default LanWashingMachineSolid;
