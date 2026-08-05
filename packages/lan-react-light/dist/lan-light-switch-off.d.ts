import React from 'react';

export interface LanLightSwitchOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightSwitchOff(props: LanLightSwitchOffProps): React.ReactElement;
export default LanLightSwitchOff;
